import React from "react";
import {Form, FormControl, FormGroup, Button} from "react-bootstrap";
import {Component }from 'react';

class SearchForm extends Component {
    render() {
        return (


            < Form
        inline >
        < FormGroup
        controlId = "formInlineEmail" >
            < FormControl
        type = "search"
        placeholder = "enter something..." / >
            < /FormGroup>
        {
            ' '
        }
    <
        Button
        type = "submit" >
            search
            < /Button>
            < /Form>
    )
        ;
    }
}
export default SearchForm
