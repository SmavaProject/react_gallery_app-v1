import React, {Component }from 'react';
import { ReactComponent as SearchSVG } from '../static/icons8-search.svg';
import { withRouter } from 'react-router-dom';

class SearchForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchKey: ""
        }
        this.searchInput = React.createRef();
    }

    /***
     * when a user clicks on submit, we dont need to perform a search.
     * We need to redirect them to a new route and App component will perform search for us
     */
    handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        //this.props.handleSearch(this.searchInput.current.value);
        this.props.history.push(`/search/${this.state.searchKey}`);
        e.currentTarget.reset();
        this.setState({ searchKey: ""});
    }

    handleChange = (e) =>{
        debugger;
        this.setState({ searchKey: this.searchInput.current.value});
    }

    render() {
        debugger;
        return (
            <form onSubmit={ () =>this.handleSubmit} className="search-form">
                <input 
                type="search" 
                name="search" 
                placeholder="Search" 
                ref={this.searchInput}
                onChange={this.handleChange}
                / >
                <button type = "submit" >
                <SearchSVG/>
            </button>
            </form>
        );
    }
}
export default withRouter (SearchForm)
