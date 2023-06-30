import React from 'react'
import './NavigationBar.css'
import { useContext } from 'react';
import AuthContext from './Context';
export default function NavigationBar() {
    const{isLoggedIn, home} = useContext(AuthContext)
    return (
        <div className='navbox'>
            <div>
                <h1>Geekster</h1>
            </div>
            <div className='navoption'>
                <a href="/#" className='navstyle'>HOME</a>
                <a href="/#" className='navstyle'>ABOUT</a>
                <a href="/#" className='navstyle'>MENU</a>
                <a href="/#" className='navstyle'>ORDER</a>
                <a href="/#" className='navstyle'>CONTACT</a>
                {isLoggedIn?<button style={{padding: "5px"}} onClick={()=>{
                  home();
                }}>Logout</button>:null}
            </div>
        </div>
    )
}