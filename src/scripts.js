import './css/styles.css';
import {fetchAll, fetchData, fetchSingleUser, apiCustomersData, apiRoomsData, apiBookingsData, postData, displayError} from './apiCalls';
import Customer from "../src/classes/Customer";
import Room from "../src/classes/Room";
import Booking from "../src/classes/Booking";
import Hotel from "../src/classes/Hotel";

//----------Query Selectors----------//

const loginPageView = document.querySelector(".login-page");
const mainPageView = document.querySelector(".main-page");
const myBookingsPageView = document.querySelector(".my-bookings-page");
const myBookingsView = document.querySelector(".my-bookings-view");

const username = document.querySelector(".enter-username");
const password = document.querySelector(".enter-password");

const loginButton = document.querySelector(".login-button");
const searchButton = document.querySelector(".search-button");
const myBookingsButton = document.querySelector(".my-bookings-button");
const goBackButton = document.querySelector(".go-back-button");
const logoutButton = document.querySelector(".logout-button");

const welcomeUser = document.querySelector(".user-welcome");
const totalSpending = document.querySelector(".total-spent");

const dateChoice = document.querySelector(".enter-date");
const roomChoice = document.querySelectorAll('input[name="rooms"]');
const viewAvailableRooms = document.querySelector(".view-avail-rooms-area");

const allRadioBtns = document.getElementsByName("rooms");

//---------Global Variables----------//

let customersData, roomsData, bookingsData, hotel, date;

//----------Functions----------//

const showElement = (domElement) => {
  domElement.forEach(element => element.classList.remove("hidden"));
};

const hideElement = (domElement) => {
  domElement.forEach(element => element.classList.add("hidden"));
};

const loadPage = (userID) => {
  fetchAll();
  Promise.all([apiCustomersData, apiRoomsData, apiBookingsData, fetchSingleUser(userID)])
    .then((data) => displayPage(data));
};

const displayPage = (data) => {
  customersData = data[0].customers;
  roomsData = data[1].rooms;
  bookingsData = data[2].bookings;
  hotel = new Hotel(customersData, roomsData, bookingsData)
  hotel.filterCustBookings(data[3]);
  hotel.calculateTotal();
  displayUserInfo();
  resetRadioBtns(allRadioBtns);
  resetSearchField();
}

const displayUserInfo = () => {
  hideElement([loginPageView])
  showElement([mainPageView])
  greetUser(hotel.singleCustomer.name, hotel.singleCustomer.totalSpent)
}

const greetUser = (customer, totalSpent) => {
  welcomeUser.innerText = `Greetings, ${customer}!`
  totalSpending.innerText = `Total Spent, $${totalSpent}!`
}

const searchResults = () => {
  date = dateChoice.value.split('-').join('/');
  hotel.filterByDate(dateChoice.value.split('-').join('/'))
  let selectedChoice = (Array.from(roomChoice).find(input => input.checked));
    if (!selectedChoice) {
      displayAllRooms(hotel.availRoomsByDate)
      makeSubmitButton();
    } else {
    hotel.filterByRoomType(selectedChoice.value)
    displayAllRooms(hotel.availRoomsByType)
    makeSubmitButton();
    }
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

const makeSubmitButton = () => {
  const bookingButton = document.querySelectorAll("book-now-button");
  bookingButton.forEach(button => {
    button.addEventListener('click', event => {
      bookRoom(event.terget.value)
    })
  })
}

viewAvailableRooms.addEventListener('click', event => {
  bookRoom(event.target.value)
})

const bookRoom = (roomNumber) => {
  let data = {
    userID: parseInt(hotel.singleCustomer.id),
    date: date,
    roomNumber: parseInt(roomNumber)
  }
  postData(data).then((data) => {
    hotel.singleCustomer.bookings.push(data.newBooking)
    hotel.bookingData.push(data.newBooking)
    hotel.calculateTotal()
      loadPage(hotel.singleCustomer.id)
      displayAllBookedRooms(hotel.singleCustomer.bookings)
      viewAvailableRooms.innerHTML = '';
      viewAvailableRooms.innerHTML += `<p class="message-error-text">Successfully booked!</p>`
    })
    .catch(error => {
      viewAvailableRooms.innerHTML = '';
      viewAvailableRooms.innerHTML += `<p class="message-error-text">Sorry, try again!</p>`
    })
}

const viewMyBookings = () => {
  hideElement([mainPageView, loginPageView])
  showElement([myBookingsPageView])
  displayAllBookedRooms(hotel.singleCustomer.bookings)
}

const displayAllBookedRooms = (bookedRooms) => {
  myBookingsView.innerHTML = '';
  bookedRooms.forEach(booking => {
    myBookingsView.innerHTML += `
      <article class="bookedCard">
      <h3>Booking Details:</h3>
      <p>Book date: ${booking.date}</p>
      <p>Room number: ${booking.roomNumber}</p>
      </article>
    `
  })
}

const getUserID = () => {
  return parseInt(username.value.substring(8));
}

const getUserPassword = () => {
  event.preventDefault();
  if (password.value === "overlook2021" && getUserID() < 51) {
    loadPage(getUserID())
  } else {
    displayError() // NOTE: gives in ERROR
  }
}

const returnToMainPage = () => {
  hideElement([myBookingsPageView, loginPageView])
  showElement([mainPageView])
  resetRadioBtns(allRadioBtns)
  resetSearchField()
}

const returnToLoginPage = () => {
  hideElement([myBookingsPageView, mainPageView])
  showElement([loginPageView])
  resetInputValues()
}

const resetInputValues = () => {
  username.value = ''
  password.value = ''
}

const resetRadioBtns = (allRadioBtns) => {
  allRadioBtns.forEach(button => button.checked = false)
}

const resetSearchField = () => {
  viewAvailableRooms.innerHTML = ''
}

//----------Event Listeners----------//

// window.addEventListener("load", loadPage(5));
loginButton.addEventListener('click', getUserPassword);
searchButton.addEventListener('click', searchResults);
myBookingsButton.addEventListener('click', viewMyBookings);
goBackButton.addEventListener('click', returnToMainPage);
logoutButton.addEventListener('click', returnToLoginPage);
