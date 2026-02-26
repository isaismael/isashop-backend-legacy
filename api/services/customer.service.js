const CustomerRepository = require("../repository/customer.repository");

class CustomerService {
  async getCustomerById(id) {
    return await CustomerRepository.getCustomerById(id);
  }
  async updateCustomer(id, data) {
    return await CustomerRepository.updateCustomer(id, data);
  }
}

module.exports = new CustomerService();