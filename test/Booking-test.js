import { expect } from 'chai';
import bookingData from './Booking-data';
import Booking from '../src/classes/Booking';

describe('Booking', () => {

  let booking, booking2;

  beforeEach(() => {

    booking = new Booking(bookingData[0]);
    booking2 = new Booking(bookingData[2]);


  });
});
