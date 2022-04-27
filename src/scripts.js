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
const myBookingsButton = document.querySelector(".my-bookings-button");// check bookings
// const goBackButton = document.querySelector(".go-back-button");
const logoutButton = document.querySelector(".logout-button");

const welcomeUser = document.querySelector(".user-welcome");
const totalSpending = document.querySelector(".total-spent");

const dateChoice = document.querySelector(".enter-date");
const roomChoice = document.querySelectorAll('input[name="rooms"]');
const viewAvailableRooms = document.querySelector(".view-avail-rooms-area");


let customersData, roomsData, bookingsData, hotel, date;



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
  totalSpending.innerText = `Total Spent, $${totalSpent}!`
}




const searchResults = () => {
  date = dateChoice.value.split('-').join('/');
  hotel.filterByDate(dateChoice.value.split('-').join('/'))
  // console.log(roomChoice);

  let selectedChoice = (Array.from(roomChoice).find(input=> input.checked));
    if (!selectedChoice) {
      displayAllRooms(hotel.availRoomsByDate)
    } else {
// console.log(typeof selectedChoice.value);
    hotel.filterByRoomType(selectedChoice.value)

    // console.log(hotel.availRoomsByType);
    displayAllRooms(hotel.availRoomsByType)
    }
    makeSubmitButton(); // <---call it here? or above------------------------
}

const displayAllRooms = (freeRooms) => {
  if (freeRooms.length > 0) {
    viewAvailableRooms.innerHTML = '';
    freeRooms.forEach(room => {
      viewAvailableRooms.innerHTML += `
        <article class="room-details">
        <h3>Room Details:</h3>
        <p>Room number: ${room.number}</p>
        <p>Room type: ${room.roomType}</p>
        <p>Bidet: ${room.bidet}</p>
        <p>Bed Size: ${room.bedSize}</p>
        <p>Number of beds: ${room.numBeds}</p>
        <p>Cost per night: ${room.costPerNight}</p>
        <button class="book-now-button" value=${room.number}>Submit</button>
        </article>
        `
    })
  }
  if (freeRooms.length < 1) {
    viewAvailableRooms.innerHTML = '';
    viewAvailableRooms.innerHTML += `<p class="message-error-text">Sorry, no results!</p>`
  }
}


///////////////////////////////////////

const makeSubmitButton = () => {
  const bookingButton = document.querySelector(".book-now-button");
  bookingButton.forEach(button => {
    button.addEventListener('click', event => {
      console.log('it was clicked');
      bookRoom(event)
    })
  })
}

const bookRoom = (event) => {
  let data = {
    userID: parseInt(hotel.singleCustomer.id),
    date: date,
    roomNumber: parseInt(event.target.value)
  }
  postData(data)
    .then(data => {
      loadPage(hotel.singleCustomer.id)
      viewAvailableRooms.innerHTML = '';
      viewAvailableRooms.innerHTML += `<p class="message-error-text">Successfully booked!</p>`
    })
    .catch(error => {
      viewAvailableRooms.innerHTML = '';
      viewAvailableRooms.innerHTML += `<p class="message-error-text">Sorry, try again!</p>`
    })
}


/////////////////////////

window.addEventListener("load", loadPage(2));

// loginButton.addEventListener('click', loginUser); //iteration3
searchButton.addEventListener('click', searchResults);
// bookingButton.addEventListener('click', bookResult); //within function!!!
// myBookingsButton.addEventListener('click', viewMyBookings);
// goBackButton.addEventListener('click', returnToMainPage);

export default hotel; //don't need
