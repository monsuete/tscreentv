import './Main.css'
import React from 'react'
import Header from './Header'
import Slide from './Slide'


export default props => 
    <React.Fragment>
        <Header {...props} />
        <main className="content">
            <Slide/>
        </main>
    </React.Fragment>