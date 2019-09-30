import React, {Component} from 'react';
import ReactSVG from "react-svg";
import DecorationSVG from '../../assets/assets/Decoration.svg'
import Tshirt from '../../assets/assets/Icon-1.svg'
import Bag from '../../assets/assets/Icon-2.svg'
import HandGlass from '../../assets/assets/Icon-3.svg'
import CircleArrows from '../../assets/assets/Icon-4.svg'


class FewSteps extends Component {
    render() {
        return <div className='container'>
            <div className='steps'>
                <div className='steps__title'>
                    <p className='steps__title--padding'>Wystarczą 4 proste kroki</p>
                    <ReactSVG src={DecorationSVG}/>
                </div>
                <Icons/>
                <div className='steps__button'>
                    <p>
                        ODDAJ <br/>
                        RZECZY
                    </p>
                </div>
            </div>
        </div>
    }
}

class Icons extends Component {
    render() {
        return <div className='steps__icons'>
            <div className='steps__icons--tshirt'>
                <ReactSVG src={Tshirt}/>
                <p>Wybierz rzeczy</p>
                <hr/>
                <p>Ubrania, zabawki, <br/>
                    sprzety i inne</p>
            </div>

            <div className='steps__icons--tshirt'>
                <ReactSVG src={Bag}/>
                <p>Spakuj je</p>
                <hr/>
                <p>Skorzystaj z <br/>
                    worków na śmieci</p>
            </div>

            <div className='steps__icons--tshirt'>
                <ReactSVG src={HandGlass}/>
                <p>Komu pomożesz</p>
                <hr/>
                <p>wybierz zaufane <br/>
                    miejsce</p>
            </div>

            <div className='steps__icons--tshirt'>
                <ReactSVG src={CircleArrows}/>
                <p>Zamów kuriera</p>
                <hr/>
                <p>Kurier przyjdzie <br/>
                    w dogodnym terminie</p>
            </div>
        </div>
    }
}

export default FewSteps