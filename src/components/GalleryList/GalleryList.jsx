import GalleryItem from "../GalleryItem/GallaryItem";

function GalleryList({ galleryItems }) {
    console.log('In gallery list', galleryItems);

    return (
        <>
        <div>
          <p>Welcome to the Photo Gallery</p>
        </div>
        <div>
            {galleryItems.map((photoItem) => {
                console.log('Gallery items here', photoItem.id);
                return (
                <GalleryItem key={photoItem.id} displayGalleryItem={photoItem}
                />
                )
            })}
        </div>
        </>
      );
}

export default GalleryList;