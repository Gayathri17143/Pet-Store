import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import "./NavigationbarStyles.css";
import Dropdown from './Dropdown';

function Navigationbar(){
    const [click,setClick]=useState(false);

    
    const[dropdown,setDropdown]=useState(false);
    const closeMobileMenu =()=>setClick(false);

    const onMouseEnter =()=>{
        if(window.innerWidth<960){
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };
    const onMouseLeave =()=>{
        if(window.innerWidth<960){
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
        <nav className='navbar'>
            <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/' className='navbar-links' onClick={closeMobileMenu}> 
                    HOME<i className='fas fa-caret-down'></i>
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/shop' className='navbar-links' onClick={closeMobileMenu}> 
                   SHOP<i className='fas fa-caret-down'></i>
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/blog' className='navbar-links' onClick={closeMobileMenu}> 
                   BLOG<i className='fas fa-caret-down'></i>
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/pages' className='navbar-links' onClick={closeMobileMenu}> 
                   PAGES  <i className='fas fa-caret-down'></i>  
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
            </ul>
        </nav>
        </>
    );
}
export default Navigationbar;
