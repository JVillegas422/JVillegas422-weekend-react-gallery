import GalleryItem from "../GalleryItem/GallaryItem";

function GalleryList({ galleryItems, loveItBtn }) {
    console.log('In gallery list', galleryItems);

    return (
        <>
        <div>
          <h3>Welcome to My Family Photo Gallery!</h3>
        </div>
        <div>
            {galleryItems.map((photoItem) => {
                console.log('Gallery items here', photoItem.id);
                return (
                <GalleryItem key={photoItem.id} displayGalleryItem={photoItem} loveItBtn={loveItBtn}
                />
                )
            })}
        </div>
        </>
      );
}

export default GalleryList;