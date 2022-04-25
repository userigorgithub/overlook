let apiCustomersData, apiRoomsData, apiBookingsData;

const fetchData = (param) => {
  return fetch(`http://localhost:3001/api/v1/${param}`)
    .then((response) => response.json())
    .then(data => console.log(data))
};

const fetchAll = () => {
  apiCustomersData = fetchData('customers');
  apiRoomsData = fetchData('rooms');
  apiBookingsData = fetchData('bookings');
};


export { fetchAll };
