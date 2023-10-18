import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function PhotoDetailModal({ photo, onClose }) {
  return (
    <Modal
      isOpen={!!photo}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Photo Details"
    >
      <div className="photo-details">
        <h2>{photo.title}</h2>
        <img src={photo.url} alt={photo.title} />
        <p>Album ID: {photo.albumId}</p>
        <p>Photo ID: {photo.id}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
}

export default PhotoDetailModal;
