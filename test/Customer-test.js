import { expect } from 'chai';
import customerData from './Customer-data';
import Customer from '../src/classes/Customer';

describe('Customer', () => {

  let customer, customer2;

  beforeEach(() => {

    customer = new Customer(customerData[0]);
    customer2 = new Customer(customerData[2]);

  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceOf(Customer);
  });

  it('should have an id', () => {
	  expect(customer.id).to.equal(1);
    expect(customer2.id).to.equal(50);
  });

  it('should have a name', () => {
	  expect(customer.name).to.equal("Leatha Ullrich");
    expect(customer2.name).to.equal("Eldridge Muller");
  });

  it('should be able to split customer\'s name', () => {
	  expect(customer.returnCustomerFirstName()).to.equal('Leatha');
    expect(customer2.returnCustomerFirstName()).to.equal('Eldridge');
  });

  it('should have an empty array before booking anything', () => {
    expect(customer.bookings).to.deep.equal([]);
    expect(customer2.bookings).to.deep.equal([]);
  });

  it('should have a $0 total spent before booking anything', () => {
    expect(customer.totalSpent).to.equal(0);
    expect(customer2.totalSpent).to.equal(0);
  });
});
