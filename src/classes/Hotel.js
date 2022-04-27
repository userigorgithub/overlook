import Customer from './Customer';
import Room from './Room';
import Booking from './Booking';

class Hotel {
  constructor(customerData, roomData, bookingData) {
    this.customerData = customerData;
    this.roomData = roomData;
    this.bookingData = bookingData;
    this.availRoomsByDate = [];
    this.availRoomsByType = [];
    this.singleCustomer;
  }

  filterByDate(date) {
    let roomNumbers = this.bookingData.reduce((acc, booking) => {
      if (date === booking.date) {
        acc.push(booking.roomNumber)
      }
      return acc;
    }, [])
    this.availRoomsByDate = this.roomData.filter(room => !roomNumbers.includes(room.number))
    return this.availRoomsByDate;
  }

  filterByRoomType(type) {
    this.availRoomsByType = [];
    this.availRoomsByDate.filter(room => {
      if (room.roomType === type) {
        this.availRoomsByType.push(room)
      }
    })
  }

  filterCustBookings(customer) {
    this.singleCustomer = new Customer(customer);
    this.bookingData.filter(booking => {
      if (this.singleCustomer.id === booking.userID) {
        this.singleCustomer.bookings.push(booking)
      }
    })
  }

  calculateTotal() {
    this.singleCustomer.totalSpent = this.singleCustomer.bookings.reduce((acc, booking) => {
      this.roomData.forEach(room => {
        if (room.number === booking.roomNumber) {
          acc += room.costPerNight;
        }
      })
      return acc;
    }, 0).toFixed(2);
    return this.singleCustomer;
  }
}

export default Hotel;
