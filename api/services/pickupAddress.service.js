const PickupAddressRepository = require("../repository/pickupAddress.repository");

class PickupAddressService{
    async createPickupAddress(pickupAddress) {
        return await PickupAddressRepository.createPickupAddress(pickupAddress);
    }

    async getAllPickupAddresses() {
        return await PickupAddressRepository.getAllPickupAddresses();
    }

    async getPickupAddresses(page = 1, limit = 10) {
        return await PickupAddressRepository.getPickupAddresses(page, limit);
    }

    async getPickupAddressById(id) {
        return await PickupAddressRepository.getPickupAddressById(id);
    }

    async updatePickupAddress(id, pickupAddress) {
        return await PickupAddressRepository.updatePickupAddress(id, pickupAddress);
    }

    async getActivePickupAddresses() {
        return await PickupAddressRepository.getActivePickupAddresses();
    }

}

module.exports = new PickupAddressService();