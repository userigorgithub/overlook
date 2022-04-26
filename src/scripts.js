import './css/styles.css';
// import apiCalls from './apiCalls';
import {fetchAll, apiCustomersData, apiRoomsData, apiBookingsData, displayError} from './apiCalls';
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

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
// console.log('This is the JavaScript entry file - your code begins here.');




const loadPage = () => {
  fetchAll();
  Promise.all([apiCustomersData, apiRoomsData, apiBookingsData])
    .then((data) => displayPage(data));
};

const displayPage = (data) => {
  // customersData = data[0];
  // roomsData = data[1];
  // bookingsData = data[2];
  // hotel = new Hotel(customersData, roomsData, bookingsData)
  hotel = new Hotel(data[0], roomsData, bookingsData)
}


window.addEventListener("load", event => loadPage());

// loginButton.addEventListener('click', loginUser); //iteration3
// searchButton.addEventListener('click', searchResults);
// bookingButton.addEventListener('click', bookResult);
// myBookingsButton.addEventListener('click', viewMyBookings);
// goBackButton.addEventListener('click', returnToMainPage);
