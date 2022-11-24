import { PropTypes } from 'prop-types';
export const Searchbar = ({ onSubmit }) => {
  return (
    <header className="searchbar">
      <form className="form">
        <button type="submit" className="button">
          <span className="button-label" onSubmit={onSubmit}>
            Search
          </span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
