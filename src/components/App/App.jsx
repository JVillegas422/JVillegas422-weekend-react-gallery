import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {
  let [galleryList, setGalleryList] = useState([]);

  // Runs when the component is first put on the DOM
  useEffect(() => {
    getGallery();
  });

  // GET route
  const fetchGalleryItem = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        setGalleryItem(response);
        console.log('Gallery items:', response);
      })
        .catch((err) => {
          console.log('error in GET', err);
        });
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
