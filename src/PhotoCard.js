import React from 'react';

function PhotoCard({ photo, onPhotoClick }) {
  const handleCardClick = () => {
    onPhotoClick(photo);
  };

  return (
    <div className="photo-card" onClick={handleCardClick}>
      <img
        src={photo.thumbnailUrl}
        alt={photo.title}
        className="photo-thumbnail"
      />
      <h3>{photo.title}</h3>
    </div>
  );
}

export default PhotoCard;
