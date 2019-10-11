import React, {Component} from 'react';
import ReactSVG from "react-svg";
import DecorationSVG from '../../../assets/assets/Decoration.svg'
import NavRight from "./../Home/NavRight";
import NavMenu from "./../Home/nav";



class Log extends Component {
    render() {


        return (
            <div className='container'>
                <div className='nav' id='nav'>
                    <div className='nav__img'></div>
                    <NavRight/>
                </div>
            </div>
        )


    }
}




export default Log