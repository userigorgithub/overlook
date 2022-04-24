import { expect } from 'chai';
import customerData from './Customer-data';
import roomData from './Room-data';
import bookingData from './Booking-data';
import Hotel from '../src/classes/Hotel';


describe('Hotel', () => {

  let hotel;

  beforeEach(() => {

    hotel = new Hotel(customerData, roomData, bookingData);

  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it('should have customer data', () => {
	  expect(hotel.customerData).to.deep.equal([
      {
        "id": 1,
        "name": "Leatha Ullrich"
      },
      {
        "id": 4,
        "name": "Kennedi Emard"
      },
      {
        "id": 50,
        "name": "Eldridge Muller"
      }
    ]);
  });

  

});
