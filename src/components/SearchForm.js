import React, {Component }from 'react';
import { ReactComponent as SearchSVG } from '../static/icons8-search.svg';
import { withRouter } from 'react-router-dom';

class SearchForm extends Component {

    constructor(props){
        super(props);
        this.state = {value: ""}
        this.searchInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    /***
     * 
     */
    handleSubmit (e) {
        e.preventDefault();
        this.props.handleSearch(this.state.value);
        this.props.history.push(`/search/${this.state.value}`);
        e.currentTarget.reset();
    }

    handleChange (e){
        this.setState({value: e.target.value});
    }

    render() {
        const {match, location, history} = this.props;
        debugger;
        return (
            <form onSubmit={this.handleSubmit} className="search-form">
                <input 
                type="search" 
                name="search" 
                value={this.state.value}
                placeholder="Search" 
                ref={this.searchInput}
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
