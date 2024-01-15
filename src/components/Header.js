import { useState } from "react"
import { LOGO_IMG } from "../utils/constant"

const Header = () => {
    let [loginBtn, setLoginBtn] = useState("Login")

    return (
        <div className='header'>
            <img alt='logo' src={LOGO_IMG} />
            <div className='heading-links'>
                <div>Home</div>
                <div>About Us</div>
                <div>Contact Us</div>
                <div> Cart</div>
                <button onClick={() => {
                    loginBtn == 'Login' ? setLoginBtn('Logout') : setLoginBtn('Login')
                }}>{loginBtn}</button>
            </div>
        </div>
    )
} 

export default Header