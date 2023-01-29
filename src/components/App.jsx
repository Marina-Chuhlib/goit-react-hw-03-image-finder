import { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

import { searchImages } from './services/api';

import css from './App.module.css';

class App extends Component {
  state = {
    search: '',
    pictures: [],
    loading: false,
    error: null,
    page: 1,
    currentImage: null,
  };

  componentDidUpdate(prevProp, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchPictures();
    }
  }

  async fetchPictures() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;

      const hits = await searchImages(search, page);

      if (hits.length === 0) {
        toast.error('Sorry, there are no available images. Please try again.');
      }

      this.setState(({ pictures }) => ({
        pictures: [...pictures, ...hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  searchPictures = ({ search }) => {
    this.setState({ search, pictures: [], page: 1 });
  };

  showPicture = img => {
    this.setState({
      currentImage: img,
    });
  };

  closeModal = () => {
    this.setState({ currentImage: null });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { loading, error, pictures, currentImage, search } = this.state;
    const { searchPictures, loadMore, showPicture, closeModal } = this;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={searchPictures} />
        {!search && (
          <p className={css.requestMassage}>Please enter a request</p>
        )}
        {error && <p className={css.errorMassage}>{error}</p>}
        {loading && <Loader />}
        <ImageGallery pictures={pictures} showPicture={showPicture} />
        {Boolean(pictures.length) && <Button loadMore={loadMore} />}
        {currentImage && (
          <Modal currentImage={currentImage} closeModal={closeModal} />
        )}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
