import { useState } from "react"
import { LOGO_IMG } from "../utils/constant"
import { Link } from "react-router-dom"

const Header = () => {
    let [loginBtn, setLoginBtn] = useState("Login")

    return (
        <div className='header'>
            <img alt='logo' src={LOGO_IMG} />
            <div className='heading-links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/cart'> Cart</Link>
                <button onClick={() => {
                    loginBtn == 'Login' ? setLoginBtn('Logout') : setLoginBtn('Login')
                }}>{loginBtn}</button>
            </div>
        </div>
    )
} 

export default Header