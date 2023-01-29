import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import PropTypes from 'prop-types';

import css from './ImageGallery.module.css';

const ImageGallery = ({ pictures, showPicture }) => {
  return (
    <ul className={css.gallery}>
      {pictures.map(({ id, webformatURL, largeImageURL, tags }) => {
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

ImageGallery.propTypes = {
  showPicture: PropTypes.func.isRequired,
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
