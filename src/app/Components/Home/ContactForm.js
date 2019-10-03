import React, {Component, useState} from 'react';
import DecorationSVG from '../../../assets/assets/Decoration.svg'
import ReactSVG from "react-svg";
import {connect} from 'react-redux'
import actions from "../../form/duck/actions";

class ContactForm extends Component {

    render() {
        return <div className='container' id='contactform'>
            <div className='contact'>
                <div className='contact__img'></div>
                <Write/>
            </div>
        </div>
    }
}

const Write = () => {



    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);

    const nameInput = React.createRef();
    const emailInput = React.createRef();
    const messageInput = React.createRef();
    const clear = () => {
        setName(null);
        setEmail(null);
        setMessage(null);
        //emailInput.current.value = ' ';
        // messageInput.current.value = ' '
    };


    const url = "http://localhost:3000/form";

    const checkForm = (validkey, item, set) => {
        if (validkey.test(item)) {
            set(true)
            return true
        } else {
            set(false);
        }
    };

    const checkSend = (a, b, c, d) => {
        if (a === true && b === true && c === true) {
            saveFn(d);
        }
    }

    async function saveFn(newmassage) {

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(newmassage),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            console.log('Success:', JSON.stringify(json));
                clear();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const fetchTextForm = e => {
        e.preventDefault();

        nameInput.current.value = ' ';
        let newmassage = {
            name: nameInput.current.value,
            email: emailInput.current.value,
            message: messageInput.current.value
        };

        const rules = {
            'Rname': /^[a-zA-Z ]{2,30}$/,
            'Remail': /^[a-z0-9\._%-]+@[a-z0-9\.-]+\.[a-z]{2,4}$/i,
            'Rmessage': /^[a-zA-Z ]{10,200}$/

        };

        async function checkAll() {
            const breakpoints = {
                a: '',
                b: '',
                c: ''
            }
            const resultsA = await checkForm(rules.Rname, newmassage.name, setName);
            breakpoints.a = resultsA;
            const resultsB = await checkForm(rules.Remail, newmassage.email, setEmail);
            breakpoints.b = resultsB;
            const resultsC = await checkForm(rules.Rmessage, newmassage.message, setMessage);
            breakpoints.c = resultsC;
            checkSend(breakpoints.a, breakpoints.b, breakpoints.c, newmassage);
        }

        checkAll();
    }

    let wrongName = null;
    let wrongEmail = null;
    let wrongMessage = null;

    if (name === false) {
         wrongName = <em>Podane imie jest nieprawidłowe</em>;
    }
    if(email === false){
        wrongEmail = <em>Podany email jest nieprawidłowy</em>;
    }
    if(message === false){
        wrongMessage = <em>Proszę wpisać min. 100 znakow </em>;
    }


    return <div className='contact__form'>
        <p>Skontaktuj sie z nami</p>
        <ReactSVG src={DecorationSVG}/>

        <form onSubmit={fetchTextForm}>
            <table>
                <tbody>
                <tr className='table__name'>
                    <th className='table__name--padding table__name--error'>
                        <span>Wpisz swoje imie</span><br/>
                        <input ref={nameInput} className='table__name--style' type='text'/><br/>
                        <hr/>
                        {wrongName}
                    </th>
                    <th className='table__name--error'>
                        <span>Wpisz swój email</span><br/>
                        <input ref={emailInput} className='table__name--style' type='text'/><br/>
                        <hr/>
                        {wrongEmail}
                    </th>
                </tr>
                <tr className='table__area'>
                    <th className='table__name--error'>
                        <span>Wpisz swoją wiadomośc</span><br/>
                        <textarea ref={messageInput} className='table__area--style'/><br/>
                        <hr/>
                        {wrongMessage}
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

export default ContactForm