import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ largeImageURL, tags,webformatURL ,showPicture}) => {
  return (
    <li className={css.item} onClick={() => showPicture({ alt: tags, src: webformatURL})}>
      <img className={css.image} src={largeImageURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
