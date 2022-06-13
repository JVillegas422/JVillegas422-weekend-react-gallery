import { useState } from 'react';

function GalleryItem({ displayGalleryItem }) {
    let [itemName, setItemName] = useState('');
    let [showItemText, setShowItemText] = useState(false);

    // handle adding new item
    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     // package state variables into object
    //     const newItem = {
    //         name: newItemName,
    //         text: newItemText
    //     };

    //     // reset state
    //     setNewItemName('');
    //     setNewItemText('');

    //     // call function on App to do the actual POST
    //     addNewGalleryItem(newItem);
    // };

    return (
        <div className='image-container' onClick={() => setShowItemText(!showItemText)}>
            {!showItemText ? 
            <div>
                <img src={displayGalleryItem.path} />
            </div> :
            <div className='image-container'>
                <p>
                {displayGalleryItem.description}
                </p>
            </div>}
        </div>
    )
};

export default GalleryItem;