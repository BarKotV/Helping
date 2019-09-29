import React, {Component} from 'react';
import ReactSVG from "react-svg";
import DecorationSVG from './../../../assets/assets/Decoration.svg'

class Nav extends Component {
    render() {


        return (
            <div className='container'>
                <div className='nav'>
                    <div className='nav__img'></div>
                    <div className='nav__menu'>
                        <ul className='nav__menu--row nav__menu--login'>
                            <li><a className='nav__menu--color' href="#">Zaloguj</a></li>
                            <li><a className='nav__menu--color' href="#">Założ konto</a></li>
                        </ul>
                        <nav>
                            <ul className='nav__menu--row'>
                                <li><a className='nav__menu--color' href="#">Start</a></li>
                                <li><a className='nav__menu--color' href="#">O co chodzi?</a></li>
                                <li><a className='nav__menu--color' href="#">O nas</a></li>
                                <li><a className='nav__menu--color' href="#">Fundacje i organizacje</a></li>
                                <li><a className='nav__menu--color' href="#">Kontakt</a></li>
                            </ul>
                        </nav>
                        <ContentRight/>
                    </div>
                </div>

            </div>
        )


    }
}

class ContentRight extends Component {
    render() {
        return <div className='content'>
            <p>Zacznij pomagać! <br/>
                Oddaj niechciane rzeczy w zaufane ręce
            </p>
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