const { PickupAddress } = require("../models");

class PickupAddressRepository{
    // -> creare PickupAddress
    async createPickupAddress(pickupAddress) {
        return await PickupAddress.create(pickupAddress);
    }
    
    // -> traer sin paginacion PickupAddress
    async getAllPickupAddresses() {
        return await PickupAddress.findAll();
    }
    
    // -> con paginacion PickupAddress
    async getPickupAddresses(page = 1, limit = 10){
        const offset = (page - 1) * limit;
        const pickupAddresses = await PickupAddress.findAll({
            offset,
            limit,
        });
        const total = await PickupAddress.count();
        return {
            data: pickupAddresses,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        }
    }
    
    // -> traer por id PickupAddress
    async getPickupAddressById(id) {
        return await PickupAddress.findByPk(id);
    }
    
    
    // -> update PickupAddress
    async updatePickupAddress(id, pickupAddress){
        await PickupAddress.update(pickupAddress, {
            where: { id: id }
        });
        return this.getPickupAddressById(id);
    }
    
    // -> solo los activos por va a ser public
    async getActivePickupAddresses() {
        return await PickupAddress.findAll({
            where: { active: 1 }
        });
    }
    
}

module.exports = new PickupAddressRepository();