const express = require("express");
const dotenv = require("dotenv");
const { MercadoPagoConfig, Preference } = require("mercadopago");
dotenv.config();

const router = express.Router();

const client = new MercadoPagoConfig({
  accessToken: process.env.YOUR_ACCESS_TOKEN,
});

router.post("/create-preference", async (req, res) => {
  try {
    const { items } = req.body;

    const preference = new Preference(client);
    const response = await preference.create({
      body: {
        items: items,
        back_urls: {
          success: "http://localhost:5174/checkout/success",
          failure: "http://localhost:5174/checkout/failure",
          pending: "http://localhost:5174/checkout/pending",
        },
        auto_return: "approved",
      },
    });

    res.status(200).json({
      preference_id: response.id,
      preference_url: response.init_point,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
