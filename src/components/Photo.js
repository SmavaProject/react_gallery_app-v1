import React, {Component, PureComponent} from "react";

class Photo extends Component{

    render(){
        return (
            <div>
                <p>{this.props.id}</p>
                <p>{this.props.title}</p>
                <p>{this.props.owner}</p>
            </div>
        );
    }

}

export default Photo;
