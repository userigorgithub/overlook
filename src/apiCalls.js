const errorMessage = document.querySelector('.message-text');

let apiCustomersData, apiRoomsData, apiBookingsData;

const fetchData = (param) => {
  return fetch(`http://localhost:3001/api/v1/${param}`)
    .then(response => response.json())
    .catch(error => displayError(error))
};

const fetchAll = () => {
  apiCustomersData = fetchData('customers');
  apiRoomsData = fetchData('rooms');
  apiBookingsData = fetchData('bookings');
};

const fetchSingleUser = (id) => {
  return fetch(`http://localhost:3001/api/v1/customers/${id}`)
    .then(response => response.json())
    .catch(error => displayError(error))
};

const postData = (data) => {
  return fetch("http://localhost:3001/api/v1/bookings", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    })
    .then(response => response.json())
    // .catch((error) => displayError(error));
};

const displayError = (error) => {
  if (error.message === "Failed to fetch") {
    errorMessage.innerText = "Ops, sorry! Try again!";
  } else {
    errorMessage.innerText = error.message;
  }
};

const checkError = (response) => {
  if (!response.ok) {
    throw new Error("Please enter correct data!");
  } else {
    response.json();
  }
};

export {fetchAll, fetchData, fetchSingleUser, apiCustomersData, apiRoomsData, apiBookingsData, postData, displayError};
