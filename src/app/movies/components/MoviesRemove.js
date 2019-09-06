import React from 'react';
import {connect} from 'react-redux'
import actions from '../duck/actions'


const MoviesReset = ({reset}) => {


    const addMovie = (event) => {
        event.preventDefault();
        reset();

    };

    return <form onSubmit={addMovie}>
        <button type='submit'>Remove ALl</button>
    </form>
};

const mapDispatchToProps = dispatch => ({
    reset:  () => dispatch(actions.reset())
});

export default connect(null, mapDispatchToProps)(MoviesReset)