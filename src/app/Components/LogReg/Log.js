import React, {Component} from 'react';
import ReactSVG from "react-svg";
import DecorationSVG from './../../../assets/assets/Decoration.svg'
import {Link} from 'react-router-dom';


class Log extends Component {
    render() {

        return (
            <div className='container'>
                <div>
                    <ul className='nav__menu--row nav__menu--login'>
                        <li><Link className='nav__menu--color' to='/log'>Zaloguj</Link></li>
                        <li><Link className='nav__menu--color' to="/reg">Założ konto</Link></li>
                    </ul>
                    <Menu/>
                </div>
                <LogForm/>
            </div>
        )


    }
}


class Menu extends Component {
    render() {
        return <div>
            <nav>
                <ul className='log'>
                    <li><Link className='nav__menu--color' to="/">Start</Link></li>
                    <li><Link className='nav__menu--color' to="/"> Ilu nas jest?</Link></li>
                    <li><Link className='nav__menu--color' to="/">O nas</Link></li>
                    <li><Link className='nav__menu--color' to="/">Fundajce i organizacje</Link></li>
                    <li><Link className='nav__menu--color' to="/">Kontakt</Link></li>
                </ul>
            </nav>
        </div>
    }
}

class LogForm extends Component {

    state = {
        login: "",
        pass: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleSubmit = () => {
        console.log('dupa');
    };

    render() {

        return <div>
            <div className='form__log'>
                <h2>Zaloguj się</h2>
                <ReactSVG src={DecorationSVG}/>
                <form className='form__log--padding'>
                    <p  className='form__log--top' >Email</p>
                    <input onChange={this.handleChange} name='login' className='form__log--style' type='text'/>
                    <p className='form__log--top' >Hasło</p>
                    <input onChange={this.handleChange} name='pass' className='form__log--style'  type='password'/>
                </form>
                <div className="form__log--top form__log--space">
                    <Link className='nav__menu--color form__log--move' to="/">Załuż konto</Link>
                    <button onClick={this.handleSubmit} className="form__submit" type='submit'>Zaloguj się</button>
                </div>
            </div>
        </div>
    }
}

export default Log