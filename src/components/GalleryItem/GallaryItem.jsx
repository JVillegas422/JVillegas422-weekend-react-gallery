import { useState } from 'react';

function GalleryItem({ displayGalleryItem }) {
    let [likePhoto, setLikePhoto] = useState('');
    let [showItemText, setShowItemText] = useState(false);

    // handle liking photo
    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log('Likes is working!', hitLike);
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
        </div>
    )
};

export default GalleryItem;