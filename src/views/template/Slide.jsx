import './Slide.css'

import React from 'react'

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import content from './content';


export default props =>


    <aside className="test">

        <Slider previousButton={<span/>} nextButton={<span/>} autoplay={1000}>
            {content.map((item, index) => (
                <div
                    key={index}
                    style={{ background: `url('${item.image}') no-repeat center center` }}>
                        {item.image}
                </div>
            ))}
        </Slider>
    </aside>;