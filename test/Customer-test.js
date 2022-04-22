import { expect } from 'chai';
import customerData from './Customer-data';
import Customer from '../src/classes/Customer';


describe('Customer', () => {

  let customer, customer2;

  beforeEach(() => {

    customer = new Customer(customerData[0]);
    customer2 = new Customer(customerData[1]);

  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceOf(Customer);
  });

  it('should have an id', () => {
	   expect(customer.id).to.equal(customerData[0].id);
     expect(customer2.id).to.equal(customerData[1].id);
  });

});
