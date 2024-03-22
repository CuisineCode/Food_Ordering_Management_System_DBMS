import React, {useState} from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar= () => {

    const [menu,setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Shoppers Hub</p> 

        </div>
        <ul className="nav-menu">
            <li onClick={()=> {setMenu("shop")}}><Link style ={{textDecoration : 'none'}} to = '/'>Shop</Link>{menu==="shop"?<hr />:<></>}</li>
            <li onClick={()=> {setMenu("men")}}><Link  style ={{textDecoration : 'none'}} to = '/mens'>Men</Link>{menu==="mens"?<hr />:<></>}</li>
            <li onClick={()=> {setMenu("women")}}><Link  style ={{textDecoration : 'none'}} to = '/womens'>Women</Link>{menu==="womens"?<hr />:<></>}</li>
            <li onClick={()=> {setMenu("kids")}}><Link  style ={{textDecoration : 'none'}} to = '/kids'>Kids</Link>{menu==="kids"?<hr />:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
        </div>
    )
}
export default Navbar