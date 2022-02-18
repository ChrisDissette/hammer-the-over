import SharkOne from '../assets/profileshark.jpg'
import SharkTwo from '../assets/57.png'
import SharkThree from '../assets/335.png'
import SharkFour from '../assets/chrisD.png'
import SharkFive from '../assets/john.png'
import SharkSix from '../assets/chrisA.png'
import Box from '@mui/material/Box';

const ImgScroll = () => {
    return (
        <div className='imgscroll-container'>
            <div className="marquee">
                <ul className="marquee-content">
                    <li> <img src={SharkOne}/> </li>
                    <li><img src={SharkTwo}/> </li>
                    <li><img src={SharkThree}/> </li>
                    <li><img src={SharkFour}/> </li>
                    <li><img src={SharkFive}/> </li>
                    <li><img src={SharkSix}/> </li>
                    <li><img src={SharkOne}/> </li>
                    <li><img src={SharkTwo}/> </li>
                    <li><img src={SharkThree}/> </li>
                    <li><img src={SharkFour}/> </li>
                    <li><img src={SharkFive}/> </li>
                    <li><img src={SharkSix}/> </li>
                    <li><img src={SharkOne}/> </li>
                </ul>
            </div>
        </div>
)
}

export default ImgScroll