import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import css from "./ImageGallery.module.css"

const ImageGallery = ({ pictures }) => {
  return (
    <ul className={css.gallery}>
      {pictures.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            id = {id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.defaultProps = {
  pictures: [],
};
