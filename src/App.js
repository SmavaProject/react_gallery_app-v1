import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import Nav from "./components/Nav";
import Photo from "./components/Photo";
import SearchForm from "./components/SearchForm";
import {BrowserRouter, Route} from 'react-router-dom';
import PhotosContainer from "./components/PhotosContainer";

class App  extends Component{
    state = {
        photos: [
            {
                name: "Photo1",
                id: 1,
                link: "lala"
            },
            {
                name: "Photo2",
                id: 2,
                link: "lala"
            }
        ]
    }

    render() {
        return (
            <BrowserRouter>
                < div className="container">
                    <Route render={ () => <SearchForm /> } />
                    <Route render={ () => <Nav/> } />

                    <PhotosContainer
                    photos={this.state.photos}/>
                    < /div>
            </BrowserRouter>
    );
    }
}

export default App;
