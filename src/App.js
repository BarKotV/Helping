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
import Log from  "./app/Components/LogReg/Log"
import Reg from "./app/Components/LogReg/Reg";
import {Provider} from 'react-redux'
import store from "./store";


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
        <Provider store={store}>
            <div className="App">
                <HashRouter>
                    <>
                        <Route exact path='/' component={Nav}/>
                        <Route exact path='/' component={ThreeMusketeers}/>
                        <Route exact path='/' component={FewSteps}/>
                        <Route exact path='/' component={AbautUs}/>
                        <Route exact path='/' component={WhoWeHelp}/>
                        <Route exact path='/' component={ContactForm}/>
                        <Route exact path='/' component={Footer}/>
                        <Route exact path='/log' component={Log}/>
                        <Route exact path='/reg' component={Reg}/>

                    </>
                </HashRouter>
            </div>
        </Provider>
    );
}

export default App;
