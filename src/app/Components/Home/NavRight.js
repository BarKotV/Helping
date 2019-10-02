import React, {Component} from 'react';
import ReactSVG from "react-svg";
import DecorationSVG from '../../../assets/assets/Decoration.svg'
import {Link} from 'react-scroll'


class NavRight extends Component{
    render() {
        return <nav>
            <ul className='nav__menu--row'>
                <li className='nav__menu--link'><Link
                    activeClass="active"
                    to="nav"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='nav__menu--link1'>Start</Link>
                </li>
                <li className='nav__menu--link' ><Link
                    activeClass="active"
                    to="thremusketeers"
                    spy={true}
                    smooth={true}
                    offset={-300}
                    duration= {500}
                > Ilu nas jest?</Link></li>
                <li className='nav__menu--link' ><Link
                    activeClass="active"
                    to="abutus"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >O nas</Link></li>
                <li className='nav__menu--link' ><Link
                    activeClass="active"
                    to="x"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Fundajce i organizacje</Link></li>
                <li className='nav__menu--link' ><Link
                    activeClass="active"
                    to="contactform"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Kontakt</Link></li>
            </ul>
        </nav>
    }
}


export default NavRight