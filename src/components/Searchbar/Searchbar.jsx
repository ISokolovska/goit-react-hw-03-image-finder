import { PropTypes } from 'prop-types';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = evt => {
    const { value } = evt.target;
    this.setState({ query: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { query } = this.state;
    this.props.setQuery(query);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            name="search"
            onChange={this.handleChange}
            value={this.state.query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
