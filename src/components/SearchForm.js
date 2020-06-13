import React, {Component }from 'react';
import { ReactComponent as SearchSVG } from '../static/icons8-search.svg';

class SearchForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        debugger;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="search-form">
                <input type="search" name="search" placeholder="Search" / >
                <button type = "submit" >
                <SearchSVG/>
            </button>
            </form>
        );
    }
}
export default SearchForm
