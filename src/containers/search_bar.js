import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };

        //Using javascript bind function to avoid 'this' incoherence
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        console.log('value: ', event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        
        // We need to go and fetch weather data

        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input 
                    placeholder='Get a five day forecast in your favorite cities'
                    className='form-control'
                    value={this.state.term}
                    // Before using fat arrow syntax to avoid 'this' incoherence
                    //onChange={event => this.onInputChange(event)}/>
                    onChange={this.onInputChange}/>
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        );

    }
}

//Anything returned from this function will end up in props
//in the container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called the result should be passed
    //to all our reducers
    return bindActionCreators({ fetchWeather: fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);