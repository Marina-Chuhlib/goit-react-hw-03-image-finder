import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import { searchImages } from './services/api';

import css from './App.module.css';

class App extends Component {
  state = {
    search: '',
    pictures: [],
    loading: false,
    error: null,
    page: 1,
    showModal: false,
    postDetails: null,
  };

  componentDidUpdate(prevProp, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      this.setState({ loading: true });
      searchImages(search)
        .then(hits => this.setState({ pictures: hits }))
        .catch(error => this.setState({ error: error.massage }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  searchPictures = ({ search }) => {
    this.setState({ search });
  };

  //   async searchImages() {
  //     try {
  //         this.setState({loading: true});
  //       const { search, page } = this.state;

  //       const data = await searchImages(search, page);

  //         this.setState(({pictures}) => ({
  //             pictures: [...pictures, ...data]
  //         }))
  //     }
  //     catch(error) {
  //         this.setState({error: error.message})
  //     }
  //     finally {
  //         this.setState({loading: false})
  //     }
  // }

  render() {
    const { loading, error, pictures } = this.state;
    const { searchPictures } = this;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={searchPictures} />
        {error && <p className={css.errorMassage}>{error}</p>}
        {loading && <p>Loading...</p>}
        <ImageGallery pictures={pictures} />
      </div>
    );
  }
}

export default App;
