import React from 'react';
import '../NavBar/NavBar.css'
import CartWidget from '../CartWidget/CartWidget'; 
import {Link} from 'react-router-dom'

const NavBar = ()=> {
        const links = [
            {category:'Productos',url:'/'},
            {category:'Soundtracks',url:'/products/Soundtrack'},
            {category:'4K Ultra HD',url:'/products/UltraHD'},
            {category:'Steelbooks',url:'/products/Steelbook'},
            {category:'DVD y Descatalogados',url:'/products/DVD'},
            {category:'Series',url:'/products/Series'},
        ]

        return(
            <nav className='NavBar'>
                <div className='NavBar-logo-container'>
                    <Link to='/'><img className='NavBar-logo'></img></Link>
                </div>
                <div className='Menu-items-cont'>
                    <ul>
                        {links.map((link,i)=>{
                            return(
                            <Link to={`${link.url}`} key={i} className="Menu-item">{`${link.category}`}</Link>
                            )
                        })}
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