import React, {Component, PureComponent} from "react";
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
                   <li> {this.props.photos.map((photo, index) =>
                         <Photo
                             name={photo.name}
                             link={photo.link}
                         />
                     )}
                   </li>
                </ul>
            </div>);
    }

}

export default PhotosContainer;
