const ShippingAdressRepository = require("../repository/shippingAddres.respository");

class ShippingAdressService {
    
  async createShippingAdress(shippingAdress) {
    return await ShippingAdressRepository.createShippingAdress(shippingAdress);
  }

  async getShippingAdressById(id) {
    return await ShippingAdressRepository.getShippingAdressById(id);
  }

  async getShippingAdresses(page = 1, limit = 10) {
    return await ShippingAdressRepository.getShippingAdresses(page, limit);
  }

  async getAllShippingAdresses() {
    return await ShippingAdressRepository.getAllShippingAdresses();
  }

  async updateShippingAdress(id, shippingAdress) {
    return await ShippingAdressRepository.updateShippingAdress(
      id,
      shippingAdress,
    );
  }

}

module.exports = new ShippingAdressService();
