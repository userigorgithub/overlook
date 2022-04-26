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
    // let changedDate = date.split('-').join('/');
    // console.log(changedDate);
    // console.log(this.bookingData);
    let roomNumbers = this.bookingData.reduce((acc, booking) => {
      if (date === booking.date) {
        acc.push(booking.roomNumber)
        // console.log(booking.roomNumber);
      }
      // console.log(acc)
      return acc;
    }, [])
    // !roomNumbers.includes.........? returns all remaining rooms
    this.availRoomsByDate = this.roomData.filter(room => !roomNumbers.includes(room.number))
    // console.log(this.availRoomsByDate);
    return this.availRoomsByDate;
  }

  filterByRoomType(type) {
    this.availRoomsByType = [];
    //filter or forEach?
    this.availRoomsByDate.filter(room => {
      console.log(room);
      if (room.roomType === type) {
        console.log("cond is weork");
        this.availRoomsByType.push(room)
        // return this.availRoomsByType
        console.log(this.availRoomsByType);
      }
    })
    // return this.availRoomsByType
  }

  filterCustBookings(customer) {
    this.singleCustomer = new Customer(customer);
    this.bookingData.filter(booking => {
      if (this.singleCustomer.id === booking.userID) {
        this.singleCustomer.bookings.push(booking)
        // console.log(booking);
      }
    })
  }

  calculateTotal() {
    this.singleCustomer.totalSpent = this.singleCustomer.bookings.reduce((acc, booking) => {
      this.roomData.forEach(room => {
        // console.log(room);
        if (room.number === booking.roomNumber) {
          acc += room.costPerNight;
        }
      })
      // console.log(acc); //room 22 isn't in the room data!
      return acc;
    }, 0).toFixed(2);
    return this.singleCustomer;
  }

}

export default Hotel;
