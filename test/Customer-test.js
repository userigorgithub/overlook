import { expect } from 'chai';
import customerData from './Customer-data.js';
import Customer from '../src/classes/Customer';


describe('Customer', () => {

  let customer, customerData;

  beforeEach(() => {

  customer = new Customer(customerData);

  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceOf(Customer);
  });



});
