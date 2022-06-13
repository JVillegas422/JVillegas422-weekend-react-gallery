import { useState } from 'react';

function GalleryItem({ displayGalleryItem, loveItBtn }) {
    let [loveItPhoto, setLoveItPhoto] = useState(displayGalleryItem.likes);
    let [showItemText, setShowItemText] = useState(false);

    // handle photo likes/love it button
    const loveItPhotoBtn = (evt) => {
        evt.preventDefault();

        console.log('Likes is working!', loveItPhoto);
        loveItBtn(evt.target.id)
        setLoveItPhoto(loveItPhoto + 1);
        displayGalleryItem.likes = loveItPhoto;
    };

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
            <div>
            <button
            id={displayGalleryItem.id} likes={displayGalleryItem.likes} onClick={loveItPhotoBtn}>
                Love it!
            </button>
            {(loveItPhoto > 0) ? 
            <h4>
                {loveItPhoto} people love this!
            </h4> : 
            <h3>
                No People love this 😞 
            </h3>}
            </div>
        </div>
    )
};

export default GalleryItem;