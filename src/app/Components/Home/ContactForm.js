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

    state = {
        name: null,
        email: null,
        message: null,
    };

    render() {


        const nameInput = React.createRef();
        const emailInput = React.createRef();
        const messageInput = React.createRef();


        const url = "http://localhost:3000/form";

        const fetchTextForm = () => {

            this.setState({
                name: null,
                email: null,
                message: null,

            });

            let newmassage = {
                name: nameInput.current.value,
                email: emailInput.current.value,
                message: messageInput.current.value
            };

            const rules = {
                'Rname': /^[a-zA-Z ]{2,30}$/,
                'Remail': /^[a-z0-9\._%-]+@[a-z0-9\.-]+\.[a-z]{2,4}$/i,
                'message': /^[a-zA-Z ]{5,100}$/

            };

            if (rules.Rname.test(newmassage.name)) {
                this.setState({
                    name: true
                })
            } else {
                this.setState({
                    name: false
                })
            }

            if (rules.Remail.test(newmassage.email)) {
                this.setState({
                    email: true
                })
            } else {
                this.setState({
                    email: false
                })
            }

            if (rules.message.test(newmassage.message)) {
                this.setState({
                    message: true
                });
            } else {
                this.setState({
                    message: false
                });
            }

            const check = () => {
                if (this.state.name === true && this.state.email === true && this.state.message === true) {
                    async function saveFn() {

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
                        } catch (error) {
                            console.error('Error:', error);
                        }
                    }

                    saveFn();
                }

            };

            check();

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