import React, {Component} from 'react';
import ReactSVG from "react-svg";
import Fb from '../../../assets/assets/Facebook.svg'
import Insta from '../../../assets/assets/Instagram.svg'

class Footer extends Component {
    render() {
        return <div className='container'>
            <div className='media'>
                    <p>Copyright Bartosz Kotniewicz</p>
                <div className='media__icons' >
                <ReactSVG src={Fb} />
                <ReactSVG src={Insta} />
                </div>
            </div>
        </div>
    }
}

export default Footer