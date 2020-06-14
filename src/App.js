import React, {Component} from 'react';
import Nav from "./components/Nav";
import Photo from "./components/Photo";
import SearchForm from "./components/SearchForm";
import {BrowserRouter, Route} from 'react-router-dom';
import PhotosContainer from "./components/PhotosContainer";

import apiKey from "./config";

class App  extends Component{

    searchKey;

    constructor(){
        super();
        this.state = {
            photos : [],
            isLoading: false
        };
    }

    componentDidMount(){
        this.searchKey="beach";
        this.handleSearch(this.searchKey);

    }

    handleSearch = (searchKey) => {
        console.log("searching....");
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchKey}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData => {
            this.setState({photos: responseData.photos.photo})
        })
        .catch(error => console.log("Error while fetching data", error))
    };



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
