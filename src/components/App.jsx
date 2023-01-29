import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
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

  showPicture = ({ hits}) => {
      this.setState({
      currentImage: hits,
    })
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { loading, error, pictures, currentImage } = this.state;
    const { searchPictures, loadMore, showPicture } = this;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={searchPictures} />
        {error && <p className={css.errorMassage}>{error}</p>}
        {loading && <Loader />}
        <ImageGallery pictures={pictures} showPicture={showPicture}/>
        {Boolean(pictures.length) && (
          <button onClick={loadMore} className={css.btnLoadMore} type="button">
            Load more
          </button>
        )}
        {currentImage && <Modal currentImage={currentImage} />}
      </div>
    );
  }
}

export default App;
