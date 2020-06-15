import React, {Component }from 'react';
import { ReactComponent as SearchSVG } from '../static/icons8-search.svg';

class SearchForm extends Component {

    searchInput = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        
        //this.props.handleSearch("cats");
    }

    render() {
        debugger;
        return (
            <form onSubmit={ () => this.props.handleSearch(this.searchInput.current.value)} className="search-form">
                <input 
                type="search" 
                name="search" 
                placeholder="Search" 
                ref={this.searchInput}
                / >
                <button type = "submit" >
                <SearchSVG/>
            </button>
            </form>
        );
    }
}
export default SearchForm
