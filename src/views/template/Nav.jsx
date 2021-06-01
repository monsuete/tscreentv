import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            {/*Refatorar em casa! */}
            <Link to="/">
                <ul>
                    <li>
                        Parcelas que cabe no seu bolso
                    </li>
                    <li>
                        Parcelas que cabe no seu bolso
                    </li>
                    <li>
                        Parcelas que cabe no seu bolso
                    </li>
                    <li>
                        Parcelas que cabe no seu bolso
                    </li>
                    <li>
                        Parcelas que cabe no seu bolso
                    </li>
                </ul>
            </Link>
            
        </nav>
    </aside>