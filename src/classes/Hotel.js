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
    this.customerData.forEach(singleCustomerData => {
      let customer = new Customer(singleCustomerData);
      this.customers.push(customer);
      console.log(customer)
      return customer;
    })
  }

  addRooms() {
    this.roomData.forEach(singleRoomData => {
      let room = new Room(singleRoomData);
      this.rooms.push(room);
      console.log(room)
      return room;
    })
  }

  addBookings() {
    this.bookingData.forEach(singleBookingData => {
      let booking = new Booking(singleBookingData);
      this.bookings.push(booking);
      console.log(booking);
      return booking;
    })
  }

  // filterCustBookings(customer) {
  //   // let customer = new Customer(customer);
  //   this.bookings.forEach(booking => {
  //     console.log(customer.id)
  //     console.log(booking.userID)
  //
  //     if (customer.id === booking.userID) {
  //       customer.bookings.push(booking);
  //     }
  //   })
  //   // console.log(customer.bookings)
  //   return customer.bookings;
  // }



  // filterByDate() {
  //
  // }

}

export default Hotel;


//filterByDate
//filterByRoomType

//calculateTotal here or in customer class?
