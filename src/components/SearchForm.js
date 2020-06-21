import React, {Component }from 'react';
import { ReactComponent as SearchSVG } from '../static/icons8-search.svg';
import { withRouter } from 'react-router-dom';

class SearchForm extends Component {

    constructor(props){
        super(props);
        this.state = {value: ""}
        //this.searchInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * calls search function and redirects a user to a new route
     * @param { event} e 
     */
    handleSubmit (e) {
        e.preventDefault();
        this.props.handleSearch(this.state.value);
        this.props.history.push(`/search/${this.state.value}`);
        e.currentTarget.reset();
    }

    /**
     * updates the state of the component when a new value is entered in the search field
     * @param { event} e 
     */
    handleChange (e){
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="search-form">
                <input 
                type="search" 
                name="search" 
                value={this.state.value}
                placeholder="Search" 
                onChange={this.handleChange}
                required
                />
                <button type = "submit" >
                <SearchSVG/>
            </button>
            </form>
        );
    }
}
export default withRouter (SearchForm)
