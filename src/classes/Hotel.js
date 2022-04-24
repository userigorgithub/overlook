class Hotel {
  constructor(customerData, roomData, bookingData) {
    this.customerData = customerData;
    this.roomData = roomData;
    this.bookingData = bookingData;
    this.customers = [];
    this.rooms = [];
    this.bookings = [];
  }
}

export default Hotel;
