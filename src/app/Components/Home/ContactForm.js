import React, {Component} from 'react';
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

class Write extends Component {
    render() {


        const nameInput = React.createRef();
        const emailInput = React.createRef();
        const messageInput = React.createRef();


        const url = "http://localhost:3000/form";

        const fetchTextForm = () => {

            const newmassage = {
                name: nameInput.current.value,
                email: emailInput.current.value,
                message: messageInput.current.value
            };

            async function add() {

                try {
                    const response = await fetch(url, {
                        method: 'POST', // or 'PUT'
                        body: JSON.stringify(newmassage), // data can be `string` or {object}!
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    const json = await response.json();
                    console.log('Success:', JSON.stringify(json));
                } catch (error) {
                    console.error('Error:', error);
                }

            }

            add();


        };


        return <div className='contact__form'>
            <p>Skontaktuj sie z nami</p>
            <ReactSVG src={DecorationSVG}/>

            <form onSubmit={fetchTextForm}>
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
                            <textarea ref={messageInput} className='table__area--style'/><br/>
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
}

export default ContactForm