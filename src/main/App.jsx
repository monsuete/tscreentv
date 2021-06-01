import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'


import Main from '../views/template/Main'
import Logo from '../views/template/Logo'
import Nav  from '../views/template/Nav'

// import Footer from '../views/template/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Main/>
            
            {/* <Footer /> */}
        </div>
    </BrowserRouter>
    