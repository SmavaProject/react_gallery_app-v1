import React, {Component, PureComponent} from "react";

class Photo extends Component{

    render(){
        return (
            <li>
                <p>{this.props.name}</p>
                <p>{this.props.link}</p>
            </li>
        );
    }

}

export default Photo;
