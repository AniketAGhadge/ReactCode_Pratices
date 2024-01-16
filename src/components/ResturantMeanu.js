import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {RESTURANT_MENU} from './../utils/constant'

const ResturantMeanu = () => {
    //const [restName, setRestName] = useState('');
    const { resId } = useParams();
    const [restMeanu, setRestMeanu] = useState([]);

    useEffect(() => {
        fetchMeanu()
    }, []);

    const fetchMeanu = async() => {
        const resMeanu = await fetch(RESTURANT_MENU+resId);

        const data = await resMeanu.json();
        console.log(data);
        setRestMeanu(data?.data)
        //setRestMeanu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }

    if (restMeanu == 0) return <h1>Loading</h1>
    const { name, cuisines, costForTwoMessage } = restMeanu?.cards[0]?.card.card.info
    const  itemCard  = restMeanu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    console.log(itemCard)
    
    return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}  -  {costForTwoMessage}</h3>
            <h2>Meanu</h2>
            <ul>{itemCard.map((res) => <li key={res.card.info.id}>{res?.card?.info?.name} -{"Rs. "} {res?.card?.info?.price/100 || res?.card?.info?.defaultPrice/100}</li>)}</ul>
        </div>
    )
}

export default ResturantMeanu