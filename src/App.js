import React from 'react';
import './scss/App.scss';
import MoviesContainer from "./app/movies/components/MoviesContainer";
import MoviesForm from "./app/movies/components/MoviesForm";
import MoviesReset from "./app/movies/components/MoviesRemove";
import Nav from './app/Components/nav'
import ThreeMusketeers from "./app/Components/ThreeMusketeers";

function App() {
    return (
        <div className="App">
        <Nav/>
        <ThreeMusketeers/>
        </div>
    );
}

export default App;
