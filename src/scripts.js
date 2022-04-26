import './css/styles.css';
// import apiCalls from './apiCalls';
import {fetchAll, fetchData, fetchSingleUser, apiCustomersData, apiRoomsData, apiBookingsData, postData, displayError} from './apiCalls';
import Customer from "../src/classes/Customer";
import Room from "../src/classes/Room";
import Booking from "../src/classes/Booking";
import Hotel from "../src/classes/Hotel";



const loginPageView = document.querySelector(".login-page");
const mainPageView = document.querySelector(".main-page");
const myBookingsPageView = document.querySelector(".my-bookings-page");

const username = document.querySelector(".enter-username");
const password = document.querySelector(".enter-password");

const loginButton = document.querySelector(".login-button");
const searchButton = document.querySelector(".search-button");
// const bookingButton = document.querySelector(".book-now-button");
const myBookingsButton = document.querySelector(".my-bookings-button");
// const goBackButton = document.querySelector(".go-back-button");
const logoutButton = document.querySelector(".logout-button");

const welcomeUser = document.querySelector(".user-welcome");
const totalSpent = document.querySelector(".total-spent");


let customersData, roomsData, bookingsData, hotel;



const showElement = domElement => {
  domElement.forEach(element => element.classList.remove("hidden"));
};

const hideElement = domElement => {
  domElement.forEach(element => element.classList.add("hidden"));
};


const loadPage = (userID) => {
  fetchAll();
  Promise.all([apiCustomersData, apiRoomsData, apiBookingsData, fetchSingleUser(userID)])
  // Promise.all([fetchData('customers'), fetchData('rooms'), fetchData('bookings'), fetchSingleUser(userID)])


    // .then(data => {
    //   hotel = new Hotel(data[0].customers, data[1].rooms, data[2].bookings)
    //   hotel.filterCustBookings(data[3]);
    //   hotel.calculateTotal();
    //   displayUserInfo();
    // })

    // .then(data => {
    //   console.log(data)
    // })
    .then((data) => displayPage(data));

};

const displayPage = (data) => {
  // hotel = new Hotel(data[0].customers, data[1].rooms, data[2].bookings)
  // hotel = new Hotel(data[0], data[1], data[2])
  console.log(data)
  customersData = data[0].customers;
  roomsData = data[1].rooms;
  bookingsData = data[2].bookings;
  hotel = new Hotel(customersData, roomsData, bookingsData)
  hotel.filterCustBookings(data[3]);
  hotel.calculateTotal();
  displayUserInfo();
}


const displayUserInfo = () => {
  greetUser(hotel.singleCustomer.name, hotel.singleCustomer.totalSpent)
}

const greetUser = (customer, totalSpent) => {
  welcomeUser.innerText = `Greetings, ${customer}!`
  totalSpent.innerText = `Total Spent, $${totalSpent}!`
}


window.addEventListener("load", loadPage(1));

// loginButton.addEventListener('click', loginUser); //iteration3
// searchButton.addEventListener('click', searchResults);
// bookingButton.addEventListener('click', bookResult);
// myBookingsButton.addEventListener('click', viewMyBookings);
// goBackButton.addEventListener('click', returnToMainPage);

export default hotel; //don't need
