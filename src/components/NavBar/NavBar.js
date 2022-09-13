import React, { useState , useEffect } from 'react';
import '../Styles/styles.css'
import CartWidget from '../CartWidget/CartWidget'; 
import {FaSearch} from 'react-icons/fa';
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
        
        const [search, setSearch] = useState('')
        const searchValue=(e)=>{
            setSearch(e.target.value)
        } 
        const submitSearch=(e)=>{
            if(e.keyCode===13){
                onFormSubmit()
            }
        }
        const onFormSubmit = (e) => {
            console.log(e)
          }
        useEffect(() => {
            const query=search;
          }, [search]);
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
                <form className='Search-Bar' onSubmit={onFormSubmit}>
                        <input type="text" placeholder='Title' onChange={(e)=>searchValue(e)} onKeyDown={(e)=>submitSearch(e)}></input>
                        <Link to={`/products/${search}`}><button type='submit'><FaSearch className='SearchIcon'/></button></Link>
                        <Link to='/cart'><CartWidget contador="1"/></Link>
                </form>
            </nav>
        )
    };

export default NavBar