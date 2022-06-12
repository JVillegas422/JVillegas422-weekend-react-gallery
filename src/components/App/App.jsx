import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import GalleryItem from '../GalleryItem/GallaryItem';
// import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {
  let [GalleryList, setGalleryList] = useState([]);

  // Runs when the component is first put on the DOM
  // useEffect(() => {
  //   getGallery();
  // });

// GET data from server
const fetchGalleryList = () => {
  axios({
    method: 'GET',
    url: '/gallery',
  })
    .then((response) => {
      setGalleryList(response);
      console.log('Gallery items:', response);
  })
    .catch((err) => {
      console.log('error in GET', err);
  });
};

// // Post to server
// const addGalleryItem = (newGalleryItemInput) => {
//   axios
//     .post('/gallery', newGalleryItemInput)
//     .then((response) => {
//       console.log('In POST /gallery', response);
//       fetchGalleryList();
//   })
//     .catch((err) => {
//       alert('Error, unable to add item.');
//       console.log('err');
//   });
// };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/kelsey_photo.jpg"/>
        <img src="images/bella_photo.jpg"/>
        <img src="images/lily_photo.jpg"/>
        <img src="images/juan_photo.jpg"/>
      </div>
    );
}

export default App;
