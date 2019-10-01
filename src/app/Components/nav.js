import React, {Component} from 'react';
import ReactSVG from "react-svg";
import DecorationSVG from '../../assets/assets/Decoration.svg'
import {Link} from 'react-scroll'

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
                <li><a className='nav__menu--color' href="#">Zaloguj</a></li>
                <li><a className='nav__menu--color' href="#">Założ konto</a></li>
            </ul>
            <nav>
                <ul className='nav__menu--row'>
                    <li><Link
                        activeClass="active"
                        to="nav"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className='nav__menu--link1'>Start</Link>
                    </li>
                    <li><Link
                        activeClass="active"
                        to="thremusketeers"
                        spy={true}
                        smooth={true}
                        offset={-300}
                        duration= {500}
                    > Ilu nas jest?</Link></li>
                    <li><Link
                        activeClass="active"
                        to="abutus"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >O nas</Link></li>
                    <li><Link
                        activeClass="active"
                        to="x"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >Fundajce i organizacje</Link></li>
                    <li><Link
                        activeClass="active"
                        to="contactform"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >Kontakt</Link></li>
                </ul>
            </nav>
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
                    <em>ODDAJ</em>
                    RZECZY
                </div>
                <div className='content__button--right'>
                    <em> ZORGANIZUJ </em>
                    ZBIÓRKĘ
                </div>
            </div>
        </div>
    }
}

export default Nav