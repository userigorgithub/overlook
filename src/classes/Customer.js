class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.bookings = [];
    this.totalSpent = 0;
  }

  returnCustomerFirstName() {
    const splitFullName = this.name.split(" ");
    return splitFullName[0];
  }
}

export default Customer;
