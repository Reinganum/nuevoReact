import React, {Component} from 'react';
import '../NavBar/NavBar.css' 

class NavBar extends Component {
    render(){
        return(
            <nav className='NavBar'>
                <img className='NavBar-logo'></img>
                <div className='Menu-items-cont'>
                    <ul>
                        <li><a className="Menu-item" href='#'>Preventas</a></li>
                        <li><a className="Menu-item" href='#'>Soundtracks</a></li>
                        <li><a className="Menu-item" href='#'>4K Ultra HD</a></li>
                        <li><a className="Menu-item" href='#'>Steelbooks</a></li>
                        <li><a className="Menu-item" href='#'>DVD y Descatalogados</a></li>
                        <li><a className="Menu-item" href='#'>Series</a></li>
                    </ul>
                </div>
                <div className='Search-Bar'>
                    <input type="text" placeholder='Título o SKU'></input>
                </div>
            </nav>
        )
    }
};

export default NavBar