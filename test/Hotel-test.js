import { expect } from 'chai';
import customerData from './Customer-data';
import roomData from './Room-data';
import bookingData from './Booking-data';
import Hotel from '../src/classes/Hotel';
import Customer from '../src/classes/Customer';

describe('Hotel', () => {

  let hotel, customer;

  beforeEach(() => {

    hotel = new Hotel(customerData, roomData, bookingData);
    customer = new Customer(customerData[0]);

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

  it('should have room data', () => {
	  expect(hotel.roomData).to.deep.equal([
      {
        "number": 1,
        "roomType": "residential suite",
        "bidet": true,
        "bedSize": "queen",
        "numBeds": 1,
        "costPerNight": 358.4
      },
      {
        "number": 2,
        "roomType": "suite",
        "bidet": false,
        "bedSize": "full",
        "numBeds": 2,
        "costPerNight": 477.38
      },
      {
        "number": 3,
        "roomType": "single room",
        "bidet": false,
        "bedSize": "king",
        "numBeds": 1,
        "costPerNight": 491.14
      },
      {
        "number": 4,
        "roomType": "single room",
        "bidet": false,
        "bedSize": "queen",
        "numBeds": 1,
        "costPerNight": 429.44
      },
      {
        "number": 5,
        "roomType": "single room",
        "bidet": true,
        "bedSize": "queen",
        "numBeds": 2,
        "costPerNight": 340.17
      },
      {
        "number": 6,
        "roomType": "junior suite",
        "bidet": true,
        "bedSize": "queen",
        "numBeds": 1,
        "costPerNight": 397.02
      },
      {
        "number": 7,
        "roomType": "single room",
        "bidet": false,
        "bedSize": "queen",
        "numBeds": 2,
        "costPerNight": 231.46
      },
      {
        "number": 8,
        "roomType": "junior suite",
        "bidet": false,
        "bedSize": "king",
        "numBeds": 1,
        "costPerNight": 261.26
      },
      {
        "number": 9,
        "roomType": "single room",
        "bidet": true,
        "bedSize": "queen",
        "numBeds": 1,
        "costPerNight": 200.39
      },
      {
        "number": 10,
        "roomType": "suite",
        "bidet": false,
        "bedSize": "twin",
        "numBeds": 1,
        "costPerNight": 497.64
      }
    ]);
  });

  it('should have booking data', () => {
	  expect(hotel.bookingData).to.deep.equal([
      {
        "id": "5fwrgu4i7k55hl76z",
        "userID": 1,
        "date": "2022/02/15",
        "roomNumber": 4
      },
      {
        "id": "5fwrgu4i7k55hl727",
        "userID": 1,
        "date": "2022/01/20",
        "roomNumber": 22
      },
      {
        "id": "5fwrgu4i7k55hl79t",
        "userID": 50,
        "date": "2022/02/04",
        "roomNumber": 10
      }
    ]);
  });

  it('should have an empty array of available rooms by date at start', () => {
    expect(hotel.availRoomsByDate).to.deep.equal([]);
  });

  it('should be able to filter rooms by date', () => {
    expect(hotel.filterByDate('2022/02/15').length).to.equal(9);
    expect(hotel.filterByDate('2022/05/15').length).to.equal(10);
  });

  it('should have an empty array of available rooms by type at start', () => {
    expect(hotel.availRoomsByType).to.deep.equal([]);
  });

  it('should be able to filter rooms by room type', () => {
    hotel.filterByDate('2022/02/15');
    hotel.filterByRoomType('single room');
    expect(hotel.availRoomsByType.length).to.equal(4);
  });

  it('should not be able to filter rooms for unavailable room type', () => {
    hotel.filterByDate('2022/02/10');
    hotel.filterByRoomType('single-room');
    expect(hotel.availRoomsByType.length).to.equal(0);
  });

  it('should have a variable single customer', () => {
    expect(hotel.singleCustomer).to.equal(undefined);
  });

  it('should be able to filter customer\'s bookings', () => {
    hotel.filterCustBookings(customer);
    expect(hotel.singleCustomer.bookings).to.deep.equal([
      {
        id: '5fwrgu4i7k55hl76z',
        userID: 1,
        date: '2022/02/15',
        roomNumber: 4
      },
      {
        id: '5fwrgu4i7k55hl727',
        userID: 1,
        date: '2022/01/20',
        roomNumber: 22
      }
    ]);
  });

  it('should be able to calculate all customer\'s bookings', () => {
    hotel.filterCustBookings(customer);
    hotel.calculateTotal();
    expect(hotel.singleCustomer.totalSpent).to.equal('429.44');
  });
});
