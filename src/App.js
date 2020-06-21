import React, {Component} from 'react';
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import PhotosContainer from "./components/PhotosContainer";
import NotFound from "./components/NotFound";

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

    handleSearch = (searchKey = "vacation") => {

        debugger;
        console.log("searching....");
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchKey}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData => {
            this.setState({photos: responseData.photos.photo,
                            searchKey: searchKey })
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
                        <Route exact path="/" render={ () => 
                            < PhotosContainer 
                                photos={this.state.photos}
                                title={this.state.searchKey} /> }/>
                        <Route path="/search/:searchKey"  render={ () =>        
                            <PhotosContainer
                                photos={this.state.photos}
                                title={this.state.searchKey}/>  }/>
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
    );
    }
}


export default App;
