import '../stylesheets/carousel.css'

import SharkOne from '../assets/profileshark.jpg'
import SharkTwo from '../assets/shark1.jpg'
import SharkThree from '../assets/shark2.jpg'
import SharkFour from '../assets/shark3.jpg'
import SharkFive from '../assets/shark4.jpg'
import SharkSix from '../assets/shark5.jpg'

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
