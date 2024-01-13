import { LOGO_IMG } from "../utils/constant"

const Header = () => {
    return (
        <div className='header'>
            <img alt='logo' src={LOGO_IMG} />
            <div className='heading-links'>
                <div>Home</div>
                <div>About Us</div>
                <div>Contact Us</div>
                <div> Cart</div>
            </div>
        </div>
    )
} 

export default Header