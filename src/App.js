import React, {Component} from 'react';
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PhotosContainer from "./components/PhotosContainer";
import NotFound from "./components/NotFound";
import EmptySearch from "./components/EmptySearch";

import apiKey from "./config";

class App  extends Component{

    constructor(){
        super();
        this.state = {
            photos : [],
            beach : [],
            mountains : [],
            urban : [],
            isLoading: true
        };
    }

    componentDidMount(){
        this.handleSearch("vacation");
        this.beachSearch();
        this.mountainsSearch();
        this.urbanSearch();

    }

    /**
     * makes rest call to Flickr, updates the state of the app
     * @param { search_query} searchKey 
     */
    handleSearch = (searchKey) => {
        this.setState({isLoading: true})
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchKey}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData => {
            this.setState({photos: responseData.photos.photo,
                            searchKey: searchKey, 
                            isLoading: false})
        })
        .catch(error => console.log("Error while fetching data", error))
        console.log("fetched by default " + searchKey);
    };

    beachSearch = (searchKey = "beach") => {
        this.setState({isLoading: true})
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchKey}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData => {
            this.setState({beach: responseData.photos.photo,
                            searchKey: searchKey, 
                            isLoading: false})
        })
        .catch(error => console.log("Error while fetching data", error))
    };

    mountainsSearch = (searchKey = "mountains") => {
        this.setState({isLoading: true})
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchKey}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData => {
            this.setState({mountains: responseData.photos.photo,
                            searchKey: searchKey, 
                            isLoading: false})
        })
        .catch(error => console.log("Error while fetching data", error))
    };

    urbanSearch = (searchKey = "urban") => {
        this.setState({isLoading: true})
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchKey}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData => {
            this.setState({urban: responseData.photos.photo,
                            searchKey: searchKey, 
                            isLoading: false})
        })
        .catch(error => console.log("Error while fetching data", error))
    };


    render() {
        console.log("rendering... " + this.state.photos);
        return (
            <BrowserRouter>
                < div className="container">
                    <Route render={ () => <SearchForm handleSearch={this.handleSearch}/> } />
                    <Route render={ () => <Nav handleSearch={this.handleSearch} /> } />
                    <Switch>
                        <Route exact path="/" render={
                            () =>   this.state.isLoading ? <h3>The page is loading, please wait...</h3> :  
                           < PhotosContainer 
                                photos={this.state.photos}
                                title={this.state.searchKey}/> }/>
                        <Route path="/search/beach" render={
                            () =>   this.state.isLoading ? <h3>The page is loading, please wait...</h3> :  
                           < PhotosContainer 
                                photos={this.state.beach}
                                title="Beach"/> }/>
                        <Route path="/search/mountains" render={
                            () =>   this.state.isLoading ? <h3>The page is loading, please wait...</h3> :  
                           < PhotosContainer 
                                photos={this.state.mountains}
                                title="Mountains"/> }/>
                        <Route path="/search/urban" render={
                            () =>   this.state.isLoading ? <h3>The page is loading, please wait...</h3> :  
                           < PhotosContainer 
                                photos={this.state.urban}
                                title="Urban"/> }/>
                        <Route path="/search/:searchKey"  render={ 
                            () =>   this.state.isLoading ? <h3>The page is loading, please wait...</h3> :      
                            <PhotosContainer
                                photos={this.state.photos}
                                title={this.state.searchKey}/>  }/>
                        <Route path="/" render={()=> <EmptySearch/>} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
    );
    }
}


export default App;
