import React, {Component} from 'react';
import {Jumbotron, Container} from "react-bootstrap";
import Nav from "./components/Nav";
import Photo from "./components/Photo";
import SearchForm from "./components/SearchForm";

const App = () =>{
    return (
        < div >
            < Jumbotron >
                < Container >
                    < h1 > Search App < /h1>
                    < p > This is a simple search app < /p>
                    <SearchForm />
                < /Container>
            < /Jumbotron>
            <Photo/>
        < /div>
    );
}

export default App;
