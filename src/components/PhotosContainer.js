import React, {Component} from "react";
import Photo from "./Photo";

class PhotosContainer extends Component{

    render() {
        console.log(this.props.photos);
   //       const retrivedPhotos = this.props.photos.map( photo => {
   //           <Photo />
   //       });
        return (
            <div className="photo-container">
                <ul>
                   {this.props.photos.map((photo, index) =>
                       <li>  <Photo
                             name={photo.name}
                             link={photo.link}
                         /></li>
                     )}
                </ul>
            </div>);
    }

}

export default PhotosContainer;
