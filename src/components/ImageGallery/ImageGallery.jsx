import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

const ImageGallery = ({ pictures, }) => {
  return (
    <ul className={css.gallery}>
      {pictures.map(({ id, webformatURL, largeImageURL, tags,showPicture }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
         showPicture={showPicture}
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
