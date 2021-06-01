import './Slide.css'
import logo from '../../assets/imgs/001.jpg'
import logo1 from '../../assets/imgs/002.jpg'
// import logo2 from '../../assets/imgs/003.jpg'
// import logo3 from '../../assets/imgs/004.jpg'
// import logo4 from '../../assets/imgs/005.jpg'
// import logo5 from '../../assets/imgs/006.jpg'

import React from 'react'

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
// import content from '../content';
// import logo from '../template/Logo'

const slides = [
    { title: 'First item', description: 'Lorem ipsum', image: <img src={logo} alt="logo" /> },
    { title: 'Second item', description: 'Lorem ipsum', image: <img src={logo1} alt="logo1" /> }
];

export default props =>


    <aside className="test">

        <Slider previousButton={<span/>} nextButton={<span/>} autoplay={3000} >
            {slides.map((item, index) => (
                <div
                    key={index}
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <div className="center">
                        
                        {item.image}
                    </div>
                </div>
            ))}
        </Slider>
    </aside>;