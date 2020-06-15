import React, {Component} from "react";
import Photo from "./Photo";

class PhotosContainer extends Component{

    render() {
        console.log(this.props.photos);
        return (
            <div className="photo-container">
                <h3>{this.props.title}</h3>
                <ul>
                   {this.props.photos.map((photo, index) =>
                       <li>  <Photo
                            id={photo.id}
                            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                            alt={photo.title}
                         /></li>
                     )}
                </ul>
            </div>);
    }

}

export default PhotosContainer;
