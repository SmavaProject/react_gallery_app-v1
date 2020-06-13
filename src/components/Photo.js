import React, {Component, PureComponent} from "react";

class Photo extends Component{

    render(){
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.link}</p>
            </div>
        );
    }

}

export default Photo;
