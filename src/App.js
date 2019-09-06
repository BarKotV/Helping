import React from 'react';
import './App.scss';
import MoviesContainer from "./app/movies/components/MoviesContainer";
import MoviesForm from "./app/movies/components/MoviesForm";
import MoviesReset from "./app/movies/components/MoviesRemove";


function App() {
    return (
        <div className="App">
            <MoviesContainer/>
            <MoviesForm/>
            <MoviesReset/>
        </div>
    );
}

export default App;
