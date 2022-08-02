import React from 'react';
import '../NavBar/NavBar.css'
import CartWidget from '../CartWidget/CartWidget'; 
import {Link} from 'react-router-dom'

const NavBar = ()=> {
        return(
            <nav className='NavBar'>
                <div className='NavBar-logo-container'>
                    <img className='NavBar-logo'></img>
                </div>
                <div className='Menu-items-cont'>
                    <ul>
                        <Link to='/'><li><a className="Menu-item">Preventas</a></li></Link>
                        <Link to='/products'><li><a className="Menu-item">Soundtracks</a></li></Link>
                        <Link to='/contact'><li><a className="Menu-item">4K Ultra HD</a></li></Link>
                        <Link to='/aboutUs'><li><a className="Menu-item">Steelbooks</a></li></Link>
                        <li><a className="Menu-item" href='#'>DVD y Descatalogados</a></li>
                        <li><a className="Menu-item" href='#'>Series</a></li>
                    </ul>
                </div>
                <div className='Search-Bar'>
                        <input type="text" placeholder='Título o SKU'></input>
                        <CartWidget contador="1"/>
                </div>
            </nav>
        )
    };

export default NavBar