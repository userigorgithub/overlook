import './css/styles.css';
// import apiCalls from './apiCalls';
import {fetchAll, apiCustomersData, apiRoomsData, apiBookingsData} from './apiCalls';
import Customer from "../src/classes/Customer";
import Room from "../src/classes/Room";
import Booking from "../src/classes/Booking";
import Hotel from "../src/classes/Hotel";


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
// console.log('This is the JavaScript entry file - your code begins here.');


let customersData, roomsData, bookingsData, hotel, currentCustomer;


const loadPage = () => {
  fetchAll();
  Promise.all([apiCustomersData, apiRoomsData, apiBookingsData])
    .then((data) => displayPage(data));
};

const displayPage = (data) => {
  customersData = data[0];
  roomsData = data[1];
  bookingsData = data[2];
  hotel = new Hotel(customersData, roomsData, bookingsData)
  // currentCustomer = new Customer()

}


window.addEventListener("load", event => loadPage());
