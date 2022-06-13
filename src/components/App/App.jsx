import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {
  let [galleryList, setGalleryList] = useState([]);

  // Runs when the component is first put on the DOM
  useEffect(() => {
    fetchGalleryList();
  }, []); 

// GET data from server
  const fetchGalleryList = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        setGalleryList(response.data);
        console.log('Gallery items:', response.data);
    })
      .catch((err) => {
        console.log('error in GET', err);
    });
  };

  const loveItBtn = (id) => {
    axios({
      method: 'PUT',
      url: '/gallery/${id}',
    })
      .then(() => {
        fetchGalleryList();
    })
      .catch((err) => {
        console.log('LoveItBtn failed', err);
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
        <GalleryList galleryItems={galleryList}
        />
      </div>
    );
}

export default App;
