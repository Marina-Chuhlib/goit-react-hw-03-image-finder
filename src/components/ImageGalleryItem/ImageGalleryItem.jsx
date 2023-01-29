import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  return (
    <li className={css.item}>
      <img className={css.image} src={largeImageURL} alt={id} />
    </li>
  );
};

export default ImageGalleryItem;
