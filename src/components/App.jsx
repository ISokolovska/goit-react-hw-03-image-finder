import React from 'react';
import { getImages } from './services/Api';
import { Searchbar } from './Searchbar/Searchbar';
export class App extends React.Component {
  state = {
    images: [],
    error: '',
  };

  componentDidMount() {
    this.fetchImages();
  }

  async fetchImages() {
    try {
      const data = await getImages();
      this.setState({
        images: data,
      });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
      </div>
    );
  }
}
