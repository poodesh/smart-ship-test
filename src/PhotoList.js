import React, { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';
import PhotoDetailModal from './PhotoDetailModal';
import axios from 'axios';

function PhotoList() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

    axios.get(apiUrl)
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div>
      <div className="photo-list">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onPhotoClick={handlePhotoClick}
          />
        ))}
      </div>
      {selectedPhoto && (
        <PhotoDetailModal
          photo={selectedPhoto}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default PhotoList;
