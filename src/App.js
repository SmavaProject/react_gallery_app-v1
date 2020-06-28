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
            isLoading: true
        };
    }

    componentDidMount(){
        this.handleSearch();

    }

    /**
     * makes rest call to Flickr, updates the state of the app
     * @param { search_query} searchKey 
     */
    handleSearch = (searchKey = "vacation") => {
        this.setState({isLoading: true})
        console.log("searching....");
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchKey}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData => {
            this.setState({photos: responseData.photos.photo,
                            searchKey: searchKey, 
                            isLoading: false})
        })
        .catch(error => console.log("Error while fetching data", error))
    };




    render() {
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
                        <Route path="/search/:searchKey"  render={ 
                            () =>   this.state.isLoading ? <h3>The page is loading, please wait...</h3> :      
                            <PhotosContainer
                                photos={this.state.photos}
                                title={this.state.searchKey}/>  }/>
                        <Route path="/empty-search" render={()=> <EmptySearch/>} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
    );
    }
}


export default App;
