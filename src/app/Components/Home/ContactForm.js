import React, {Component} from 'react';
import DecorationSVG from '../../../assets/assets/Decoration.svg'
import ReactSVG from "react-svg";
import {connect} from 'react-redux'
import actions from "../../form/duck/actions";
import store from "../../../store";

class ContactForm extends Component {

    render() {
        return <div className='container' id='contactform'>
            <div className='contact'>
                <div className='contact__img'></div>
                <Write props={store}/>
            </div>
        </div>
    }
}

const Write = (props) => {

    const nameInput = React.createRef();
    const emailInput = React.createRef();
    const messageInput = React.createRef();

    const handleSubmit = event => {
        event.preventDefault();
        props.name(nameInput.current.value)
    };
    return <div className='contact__form'>
        <p>Skontaktuj sie z nami</p>
        <ReactSVG src={DecorationSVG}/>

        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                <tr className='table__name'>
                    <th className='table__name--padding'>
                        <span>Wpisz swoje imie</span><br/>
                        <input ref={nameInput} className='table__name--style' type='text'/><br/>
                        <hr/>
                    </th>
                    <th>
                        <span>Wpisz swój email</span><br/>
                        <input ref={emailInput} className='table__name--style' type='text'/><br/>
                        <hr/>
                    </th>
                </tr>
                <tr className='table__area'>
                    <th>
                        <span>Wpisz swoją wiadomośc</span><br/>
                        <textarea ref={messageInput}  className='table__area--style'/><br/>
                        <hr/>
                    </th>
                </tr>
                <tr>
                    <th className='table__button'>
                        <button className='table__button--style'>Wyślij</button>
                    </th>
                </tr>
                </tbody>
            </table>
        </form>
    </div>
};

const mapDispatchToProps = dispatch => ({
    name: item => dispatch(actions.name(item)),
    email: item => dispatch(actions.email(item))
});

export default connect(null, mapDispatchToProps)(ContactForm)