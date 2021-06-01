import './Header.css'
import React from 'react'

export default props =>
    <header align="center" className="header d-nome d-sm-flex flex-column" >
        <h1 className="mt-3" >
            {/* <i className={`fa fa-${props.icon}`}></i>{props.title} */}
            <h2  >La Salle</h2>
            <h4>Seu filho merece</h4>
        </h1>
        <p className="lead tex-muted">{props.subtitle}</p>
        
    </header>