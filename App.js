import React from 'react'
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className='header'>
            <img alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpF-TUIJ0qorvQ9OGGozCQjjT2bm00OuoTWDYNryFXA&s'/>
            <div className='heading-links'>
                <div>Home</div>
                <div>About Us</div>
                <div>Contact Us</div>
                <div> Cart</div>
            </div>
        </div>
    )
} 

const ResturantCard = () => {
    return (
        <div className='card'>
            <div className='restro_img'>
                <img alt='restro_img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hpooldauljohuiap84a8' />
            </div>
            <h2>Hotel Dawath</h2>
            <h3>3 star .25-30mins</h3>
            <h4>Indian, Chinese,Beverages</h4>
            <h5>Shivajinagar</h5>
        </div>
        
    )
}

const Body = () => {
    return (
        <div className='restro_card'>
            <ResturantCard />
            <ResturantCard />
            <ResturantCard />
            <ResturantCard />
            <ResturantCard />
            <ResturantCard />
            <ResturantCard />
            <ResturantCard />
            <ResturantCard />
            <ResturantCard />
            <ResturantCard />
            <ResturantCard />
            <ResturantCard />
            <ResturantCard />
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);