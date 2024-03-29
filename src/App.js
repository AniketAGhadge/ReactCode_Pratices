import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import ResturantMeanu from './components/ResturantMeanu';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element:<About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/resturant/:resId',
                element: <ResturantMeanu/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);