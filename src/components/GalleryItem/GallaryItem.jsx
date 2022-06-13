import { useState } from 'react';

function GalleryItem({ displayGalleryItem }) {
    let [likePhoto, setLikePhoto] = useState('');
    let [showItemText, setShowItemText] = useState(false);

    // handle photo likes/love it button
    const likePhotoBtn = (evt) => {
        evt.preventDefault();

        console.log('Likes is working!', likePhoto);
        hitLike(evt.target.id);
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
            id={displayGalleryItem.id} onClick={likePhotoBtn}>
                Love it!
            </button>
        </div>
    )
};

export default GalleryItem;