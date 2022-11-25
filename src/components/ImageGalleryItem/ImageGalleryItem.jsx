import React from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  image: { id, tags, webformatURL, largeImageURL },
  toggleModal,
}) => {
  return (
    <li
      className="gallery-item"
      onClick={() => {
        toggleModal({ tags, largeImageURL });
      }}
    >
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
