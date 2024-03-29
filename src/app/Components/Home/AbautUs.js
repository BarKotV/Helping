import React, {Component} from 'react';
import ReactSVG from "react-svg";
import DecorationSVG from '../../../assets/assets/Decoration.svg'
import Signature from '../../../assets/assets/Signature.svg'

class AbautUs extends Component {
    render() {
        return <div className='container' id='abutus'>
            <div className='abaut'>
                <AbautLeft/>
                <div className='abaut__img'> </div>
            </div>
        </div>
    }
}

class AbautLeft extends Component {

    render() {

        return <div className='abaut__text'>
            <span>O nas</span>
            <ReactSVG className='abaut__text--icon decoration--padding'  src={DecorationSVG}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa error excepturi inventore minus voluptate!</p>
            <div className='abaut__text--signature'>
            <ReactSVG src={Signature} />
            </div>
        </div>
    }
}


export default AbautUs
