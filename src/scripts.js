import './css/styles.css';
import apiCalls from './apiCalls';
import {fetchAll, apiCustomersData, apiRoomsData, apiBookingsData} from './apiCalls';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');


const loadPage = () => {
  fetchAll();
  Promise.all([apiCustomersData, apiRoomsData, apiBookingsData]).then((data) => testFunc(data));
};


window.addEventListener("load", event => loadPage());
