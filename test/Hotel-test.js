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

  it('should have an empty array of customers at start', () => {
    expect(hotel.customers).to.deep.equal([]);
  });

  it('should have an empty array of rooms at start', () => {
    expect(hotel.rooms).to.deep.equal([]);
  });

});
