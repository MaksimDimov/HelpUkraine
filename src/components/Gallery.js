import React from 'react';

// Gallery component definition
function Gallery(props) {
  return (
    <section>
      <div className="container">
        <h2 className='text'>Information</h2>
        <div className="gallery">
          {props.photos.map((photo) => (
            <div key={photo.id} className="photo">
              <img src={photo.img} alt={photo.movie}/>
              <div className="photo-description">
                <p className="description">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;