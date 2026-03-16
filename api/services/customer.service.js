const CustomerRepository = require("../repository/customer.repository");

class CustomerService {
  async getCustomerById(id) {
    return await CustomerRepository.getCustomerById(id);
  }
  async updateCustomer(id, data) {
    return await CustomerRepository.updateCustomer(id, data);
  }

  async getCustomers(page = 1, limit = 10){
    return await CustomerRepository.getCustomers(page, limit);
  }

}

module.exports = new CustomerService();