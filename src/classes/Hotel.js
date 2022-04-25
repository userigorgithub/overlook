import Customer from './Customer';
import Room from './Room';
import Booking from './Booking';

class Hotel {
  constructor(customerData, roomData, bookingData) {
    this.customerData = customerData;
    this.roomData = roomData;
    this.bookingData = bookingData;
    this.customers = [];
    this.rooms = [];
    this.bookings = [];
  }

  addCustomers() {
    let customer = new Customer(this.customerData);
    this.customerData.forEach(customerData => {
      this.customers.push(customer);
    })
    return customer;
  }

  addRooms() {
    let room = new Room(this.roomData);
    this.roomData.forEach(roomData => {
      this.rooms.push(room);
    })
    return room;
  }

  addBookings() {
    let booking = new Booking(this.roomData);
    this.bookingData.forEach(bookingData => {
      this.bookings.push(booking);
    })
    return booking;
  }


}

export default Hotel;


//filterByDate
//filterByRoomType

//calculateTotal here or in customer class?
