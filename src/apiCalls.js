
const errorMsg = document.querySelector('.message-error-text');


let apiCustomersData, apiRoomsData, apiBookingsData;





const fetchData = (param) => {
  return fetch(`http://localhost:3001/api/v1/${param}`)
    .then(response => response.json())
    .catch(error => displayError(error))
    .then(data => console.log(data))
};

const fetchAll = () => {
  apiCustomersData = fetchData('customers');
  apiRoomsData = fetchData('rooms');
  apiBookingsData = fetchData('bookings');
};



const displayError = (error) => {
  if (error.message === "Failed to fetch") {
    errorMsg.innerText = "Ops, sorry! Try again!";
  } else {
    errorMsg.innerText = error.message;
  }
};


export {fetchAll, apiCustomersData, apiRoomsData, apiBookingsData};
