import React, {Component} from "react";

class NotFound extends Component {
    render(){
        return (
            <div>
                <h2>No results found</h2>
                <p>That search did not return any results, please try again.</p>
            </div>
        )
    }
}
export default NotFound;