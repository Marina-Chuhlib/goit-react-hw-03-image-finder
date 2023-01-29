import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  largeImageURL,
  tags,
  webformatURL,
  showPicture,
}) => {
  return (
    <li
      onClick={() => showPicture({ alt: tags, src: webformatURL })}
      className={css.item}
    >
      <img className={css.image} src={largeImageURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  showPicture: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
