import { useState } from 'react';

function GalleryList({ addGalleryItem }) {
    let [newItemName, setNewItemName] = useState('');
    let [newItemText, setNewItemText] = useState('');

    // handle adding new item
    const handleSubmit = (event) => {
        event.preventDefault();

        // package state variables into object
        const newItem = {
            name: newItemName,
            text: newItemText
        };

        // reset state
        setNewItemName('');
        setNewItemText('');

        // call function on App to do the actual POST
        addGalleryItem(newItem);
    };

    return (
        <div>
            Testing. . .
        </div>
    )
}