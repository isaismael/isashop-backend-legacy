const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const Cart = require("../models/cart.model");
const { MercadoPagoConfig, Preference, Payment } = require("mercadopago");

const router = express.Router();
const client = new MercadoPagoConfig({
  accessToken: process.env.YOUR_ACCESS_TOKEN,
});

const NGROK_URL = process.env.NGROK_URL;

router.post("/webhook", async (req, res) => {
  try {
    const { type, data } = req.body;
    console.log("Webhook recibido:", req.body);

    if (type === "payment") {
      const paymentId = data.id;
      const payment = new Payment(client);
      const paymentData = await payment.get({ id: paymentId });
      console.log("Payment status:", paymentData.status);

      if (paymentData.status === "approved") {
        const customerId = paymentData.metadata?.customer_id;
        if (customerId) {
          await Cart.update(
            { is_active: 0 },
            { where: { customer_id: customerId, is_active: 1 } }
          );
          console.log(`Carrito desactivado para customer ${customerId}`);
        }
      }
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error("Error webhook:", error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/create-preference", async (req, res) => {
  try {
    const { items, customer_id } = req.body;
    console.log("Items recibidos:", JSON.stringify(items, null, 2));

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "No se recibieron items validos" });
    }

    const sanitizedItems = items.map((item) => ({
      title: String(item.title || "Producto"),
      quantity: Number(item.quantity || 1),
      unit_price: Number(item.unit_price || 0),
      currency_id: "ARS",
    }));

    console.log("Items sanitizados:", JSON.stringify(sanitizedItems, null, 2));

    const preference = new Preference(client);
    const response = await preference.create({
      body: {
        items: sanitizedItems,
        metadata: { customer_id },
        back_urls: {
          success: NGROK_URL + "/checkout/success",
          failure: NGROK_URL + "/checkout/failure",
          pending: NGROK_URL + "/checkout/pending",
        },
        auto_return: "approved",
      },
    });

    res.status(200).json({
      preference_id: response.id,
      preference_url: response.init_point,
    });
  } catch (error) {
    console.error("Error MP:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;