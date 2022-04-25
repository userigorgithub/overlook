const fetchData = (param) => {
  return fetch(`http://localhost:3001/api/v1/${param}`)
    .then((response) => response.json());
};

const fetchAll = () => {
  apiUsersData = fetchData('customers');
  apiIngredientsData = fetchData('rooms');
  apiRecipeData = fetchData('bookings');
};
