import React from 'react';
import './scss/App.scss';
import MoviesContainer from "./app/movies/components/MoviesContainer";
import MoviesForm from "./app/movies/components/MoviesForm";
import MoviesReset from "./app/movies/components/MoviesRemove";
import Nav from './app/Components/Home/nav'
import ThreeMusketeers from "./app/Components/Home/ThreeMusketeers";
import FewSteps from "./app/Components/Home/FewSteps";
import AbautUs from "./app/Components/Home/AbautUs";
import WhoWeHelp from "./app/Components/Home/WWHelp";
import ContactForm from "./app/Components/Home/ContactForm"
import Footer from "./app/Components/Home/footer";


import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <HashRouter>
                <>
                    <Route exact path='/' component={Nav} />
                    <Route path='/' component={ThreeMusketeers} />
                    <Route path='/' component={FewSteps} />
                    <Route path='/' component={AbautUs} />
                    <Route path='/' component={WhoWeHelp} />
                    <Route path='/' component={ContactForm} />
                    <Route path='/' component={Footer} />
                </>
            </HashRouter>;
        </div>
    );
}

export default App;
