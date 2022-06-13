import { useState } from 'react';

function GalleryItem({ displayGalleryItem, loveIt }) {
    let [loveItPhoto, setLoveItPhoto] = useState(GalleryItem.loveIt);
    let [showItemText, setShowItemText] = useState(false);

    // handle photo likes/love it button
    const loveItPhotoBtn = (evt) => {
        evt.preventDefault();

        // console.log('Likes is working!', loveItPhoto);
        loveItBtn(evt.target.id)
        setLoveItPhoto(loveItPhoto + 1);
        GalleryItem.loveIt = loveItPhoto;
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
            <button
            id={displayGalleryItem.id} onClick={loveItPhotoBtn}>
                Love it!
            </button>
        </div>
    )
};

export default GalleryItem;