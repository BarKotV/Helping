import React, {Component} from 'react';
import DecorationSVG from '../../assets/assets/Decoration.svg'
import ReactSVG from "react-svg";


class WhoWeHelp extends Component{
    render() {
        return <div className='container'>
            <div className='help'>
                <em>Komu pomagamy?</em>
                <ReactSVG className='decoration--padding' src={DecorationSVG} />
                <Teams />
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque earum et ipsam necessitatibus nisi obcaecati quaerat ratione sapiente? Assumenda dicta ea magnam quae quasi, tenetur!</span>
            </div>
        </div>
    }
}

class Teams extends Component{
    render() {
        return <div className='help__teams'>
            <p>Fundacjom</p>
            <p>Organizacjom <br />
            pozarządowym</p>
            <p>Lokalnym <br />
                zbiórkom</p>
        </div>
    }
}

export default WhoWeHelp