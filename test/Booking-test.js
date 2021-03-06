import { expect } from 'chai';
import bookingData from './Booking-data';
import Booking from '../src/classes/Booking';

describe('Booking', () => {

  let booking, booking2;

  beforeEach(() => {

    booking = new Booking(bookingData[0]);
    booking2 = new Booking(bookingData[2]);

  });

  it('should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('should be an instance of Booking', () => {
    expect(booking).to.be.an.instanceOf(Booking);
  });

  it('should have a booking id', () => {
	  expect(booking.id).to.equal('5fwrgu4i7k55hl76z');
    expect(booking2.id).to.equal("5fwrgu4i7k55hl79t");
  });

  it('should have a userID', () => {
  	expect(booking.userID).to.equal(1);
    expect(booking2.userID).to.equal(50);
    });

  it('should have a booking date', () => {
	  expect(booking.date).to.equal('2022/02/15');
    expect(booking2.date).to.equal('2022/02/04');
  });

  it('should have a room number', () => {
	  expect(booking.roomNumber).to.equal(4);
    expect(booking2.roomNumber).to.equal(10);
  });
});
