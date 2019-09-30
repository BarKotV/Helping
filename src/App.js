import React from 'react';
import './scss/App.scss';
import MoviesContainer from "./app/movies/components/MoviesContainer";
import MoviesForm from "./app/movies/components/MoviesForm";
import MoviesReset from "./app/movies/components/MoviesRemove";
import Nav from './app/Components/nav'
import ThreeMusketeers from "./app/Components/ThreeMusketeers";
import FewSteps from "./app/Components/FewSteps";
import AbautUs from "./app/Components/AbautUs";
import WhoWeHelp from "./app/Components/WWHelp";

function App() {
    return (
        <div className="App">
            <Nav/>
            <ThreeMusketeers/>
            <FewSteps/>
            <AbautUs />
            <WhoWeHelp />
        </div>
    );
}

export default App;
