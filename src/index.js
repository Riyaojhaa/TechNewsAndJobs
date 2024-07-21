// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import { Cheerio } from 'cheerio';

// const url='https://news.ycombinator.com/from?site=ycombinator.com&next=40732320';

// axios.get(url).
// then((response) => {
//   console.log(response)
// }).catch((error) => {
//   console.log(error)
// })


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';
// import './index.css';
// // import cheerio  from 'cheerio';
// // import axios from 'axios';

// ReactDOM.createRoot(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the correct import for createRoot
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

// Create the root element and render the App component within the Router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);



// const url='https://news.ycombinator.com/from?site=ycombinator.com&next=40732320';

// axios.get(url).then((response) => {
//   console.log(response)
// }).catch((error) => {
//   console.log(error)
// })

