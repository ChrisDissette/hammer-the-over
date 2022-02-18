import '../stylesheets/carousel.css'

import SharkOne from '../assets/profileshark.jpg'
import SharkTwo from '../assets/57.png'
import SharkThree from '../assets/335.png'
import SharkFour from '../assets/chrisD.png'
import SharkFive from '../assets/john.png'
import SharkSix from '../assets/chrisA.png'

import Box from '@mui/material/Box';

const ImgCarousel = () => {
    return (
        <div className='banner-container'>
                <article>
                    <div className='shark-div'>
                        <ul>
                            <li><img className='shark-image' src={SharkOne} /></li>
                            <li><img className='shark-image' src={SharkTwo} /></li>
                            <li><img className='shark-image' src={SharkThree} /></li>
                            <li><img className='shark-image' src={SharkFour} /></li>
                            <li><img className='shark-image' src={SharkFive} /></li>
                            <li><img className='shark-image'src={SharkSix} /></li>
                        </ul>
                    </div>
                    <div className='shark-div'>
                        <ul>
                            <li><img className='shark-image' src={SharkOne} /></li>
                            <li><img className='shark-image'src={SharkTwo} /></li>
                            <li><img className='shark-image'src={SharkThree} /></li>
                            <li><img className='shark-image'src={SharkFour} /></li>
                            <li><img className='shark-image'src={SharkFive} /></li>
                            <li><img className='shark-image'src={SharkSix} /></li>
                        </ul>
                    </div>
                </article>
        </div>
    );
};

export default ImgCarousel;
