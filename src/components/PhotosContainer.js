import React from "react";
import Photo from "./Photo";
import EmptySearch from "./EmptySearch";

const PhotosContainer = ({photos, title}) => {

    let allPhotos;

    if (photos.length < 1){
        allPhotos = <EmptySearch />;
    }else{
        allPhotos =  photos.map((photo) => (
            <Photo
                id={photo.id}
                key={photo.id}
                src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                alt={photo.title}
            />
          ));
    }

    return (
        <div className="photo-container">
            <h3>{title}</h3>
            <ul>
               {allPhotos}
            </ul>
        </div>);
}

export default PhotosContainer;
