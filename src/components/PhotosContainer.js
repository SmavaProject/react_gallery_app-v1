import React, {Component} from "react";
import Photo from "./Photo";
import { withRouter } from 'react-router-dom';

class PhotosContainer extends Component{

    componentDidMount(){
        if(this.props.photos.length < 1){
            console.log("photos are emptx")
            this.props.history.push("/empty-search");
        }
    }

    render() {
        return (
            <div className="photo-container">
                <h3>{this.props.title}</h3>
                <ul>
                   {this.props.photos.map((photo, index) =>
                       <li key={photo.id.toString()}>  
                            <Photo
                            id={photo.id}
                            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                            alt={photo.title}
                         /></li>
                     )}
                </ul>
            </div>);
    }

}

export default withRouter (PhotosContainer);
