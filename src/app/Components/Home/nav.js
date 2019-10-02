import React, {Component} from 'react';
import ReactSVG from "react-svg";
import DecorationSVG from '../../../assets/assets/Decoration.svg'
import NavRight from "./NavRight";

import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Nav extends Component {
    render() {


        return (
            <div className='container'>
                <div className='nav' id='nav'>
                    <div className='nav__img'></div>
                    <NavMenu/>
                </div>
            </div>
        )


    }
}

class NavMenu extends Component {
    render() {
        return <div className='nav__menu'>
            <ul className='nav__menu--row nav__menu--login'>
                <li><Link className='nav__menu--color' to='/logowanie'>Zaloguj</Link></li>
                <li><Link className='nav__menu--color' to="/rejestracja">Założ konto</Link></li>
            </ul>
            <NavRight />
            <ContentRight/>
        </div>
    }
}

class ContentRight extends Component {



    render() {
        return <div className='content' id='nav'>
            <em>Zacznij pomagać! <br/>
                Oddaj niechciane rzeczy w zaufane ręce
            </em>
            <div>
                <ReactSVG src={DecorationSVG}/>
            </div>
            <div className='content__button'>
                <div className='content__button--left'>
                    <Link  className='content__button--link' to='/'>
                    ODDAJ<br />
                    RZECZY
                </Link></div>
                <div className='content__button--right'>
                    <Link  className='content__button--link' to='/'>
                        ZORGANIZUJ<br />
                        ZBIÓRKĘ
                    </Link></div>
            </div>
        </div>
    }
}

export default Nav