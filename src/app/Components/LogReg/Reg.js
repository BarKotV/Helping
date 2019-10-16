import React, {Component} from 'react';
import ReactSVG from "react-svg";
import DecorationSVG from './../../../assets/assets/Decoration.svg'
import {Link} from 'react-router-dom';


class Reg extends Component {
    render() {

        return (
            <div className='container'>
                <div>
                    <ul className='nav__menu--row nav__menu--login'>
                        <li><Link className='nav__menu--color' to='/log'>Zaloguj</Link></li>
                        <li><Link className='nav__menu--color' to="/reg">Założ konto</Link></li>
                    </ul>
                    <RegMenu/>
                </div>
                <RegForm/>
            </div>
        )


    }
}


class RegMenu extends Component {
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

class RegForm extends Component {

    state = {
        login: "",
        pass: "",
        repass: "",
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleSubmit = () => {
        console.log(this.state);
        this.setState({
            login: "",
            pass: "",
            repass: "",
        });
    };

    render() {

        return <div>
            <div className='form__log'>
                <h2>Załóż konto</h2>
                <ReactSVG src={DecorationSVG}/>
                <form className='form__log--padding'>
                    <p  className='form__log--top' >Email</p>
                    <input onChange={this.handleChange} value={this.state.login} name='login'  className='form__log--style' type='text'/>
                    <p className='form__log--top' >Hasło</p>
                    <input onChange={this.handleChange} value={this.state.pass} name='pass' className='form__log--style'  type='password'/>
                    <p className='form__log--top' >Powtórz Hasło</p>
                    <input onChange={this.handleChange} value={this.state.repass} name='repass' className='form__log--style'  type='password'/>
                </form>
                <div className="form__log--top form__log--space">
                    <Link className='nav__menu--color form__log--move' to="/log">Zaloguj się</Link>
                    <button onClick={this.handleSubmit} className="form__submit" type='submit'>Zaloguj się</button>
                </div>
            </div>
        </div>
    }
}

export default Reg