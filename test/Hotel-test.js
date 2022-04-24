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

});
