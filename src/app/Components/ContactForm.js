import React, {Component} from 'react';
import DecorationSVG from '../../assets/assets/Decoration.svg'
import ReactSVG from "react-svg";

class ContactForm extends Component{
    render() {
        return <div className='container' id='contactform'>
            <div className='contact'>
                <div className='contact__img'> </div>
                <Write />
            </div>
        </div>
    }
}

class Write extends Component{
    render() {
        return <div className='contact__form'>
            <p>Skontaktuj sie z nami</p>
            <ReactSVG src={DecorationSVG} />
            <form>
                <table>
                    <tr className='table__name'>
                        <th className='table__name--padding'>
                            <span>Wpisz swoje imie</span><br />
                            <input className='table__name--style' type='text'/><br />
                            <hr />
                        </th>
                        <th>
                            <span>Wpisz swój email</span><br />
                            <input className='table__name--style' type='text'/><br />
                            <hr />
                        </th>
                    </tr>
                    <tr className='table__area'>
                        <th>
                            <span>Wpisz swoją wiadomośc</span><br />
                            <textarea   maxlength="150" className='table__area--style'/><br />
                            <hr />
                        </th>
                    </tr>
                    <tr>
                        <th className='table__button'>
                            <button className='table__button--style'>Wyślij</button>
                        </th>
                    </tr>
                </table>
            </form>
        </div>
    }
}

export default ContactForm