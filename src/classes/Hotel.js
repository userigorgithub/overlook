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
    this.availRoomsByDate = [];
  }

  addCustomers() {
    this.customerData.forEach(singleCustomerData => {
      let customer = new Customer(singleCustomerData);
      this.customers.push(customer);
      // console.log(customer)
      return customer;
    })
  }

  addRooms() {
    this.roomData.forEach(singleRoomData => {
      let room = new Room(singleRoomData);
      this.rooms.push(room);
      // console.log(room)
      return room;
    })
  }

  addBookings() {
    this.bookingData.forEach(singleBookingData => {
      let booking = new Booking(singleBookingData);
      this.bookings.push(booking);
      // console.log(booking);
      return booking;
    })
  }

  filterCustBookings(customer) {
    // let customer = new Customer(customer);
    this.bookings.forEach(booking => {
      // console.log(customer.id)
      // console.log(booking.userID)

      if (booking.userID === customer.id) {
        customer.bookings.push(booking);
      }
    })
    // console.log(customer.bookings)
    return customer.bookings;
  }

  // filterByDate(date) {
  //   let changedDate = date.split('-').join('/');
  //   console.log(changedDate)
  //   let roomNumbers = this.bookings.reduce((acc, booking) => {
  //     if (changedDate === booking.date) {
  //       acc.push(booking.roomNumber)
  //       console.log(booking.roomNumber);
  //     }
  //     console.log(acc)
  //     return acc;
  //   }, [])
  //   return roomNumbers;
  // }

}

export default Hotel;


//filterByDate
//filterByRoomType

//calculateTotal here or in customer class?
