import React from 'react';
import './scss/App.scss';
import MoviesContainer from "./app/movies/components/MoviesContainer";
import MoviesForm from "./app/movies/components/MoviesForm";
import MoviesReset from "./app/movies/components/MoviesRemove";
import Nav from './app/Components/Nav/nav'

function App() {
    return (
        <div className="App">
        <Nav/>
        </div>
    );
}

export default App;
