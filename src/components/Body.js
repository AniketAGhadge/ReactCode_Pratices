import ResturantCard from "./ResturantCard"
import resList from "../utils/mockData"
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const Body = () => {
    const [restroList, setRestroList] = useState([]);
    const [searchtxt, setSearchtxt] = useState("");
    const [filterList, setFilterList] = useState([]);

    useEffect(() => { 
        fetchURL()
    }, []);

    const fetchURL = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const resList = await data.json();
        setRestroList(resList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterList(resList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return restroList.length === 0 ? <h1>Loading</h1> : (
        <div className="body">
            <div className="search-btn">
                <input type="text" placeholder="search" value={searchtxt} onChange={(e) => {
                    setSearchtxt(e.target.value)
                }}/>
                <button onClick={() => {
                    const listOfRestro = restroList.filter((res) =>
                        res.info.name.toLowerCase().includes(searchtxt.toLowerCase())
                    )
                    setFilterList(listOfRestro);
                }}>Search</button>
                <button className="top_res_btn" onClick={() => {
                const filterData = resList.filter((res) => res.info.avgRating > 4.5);
                setRestroList(filterData);
                }}>Top Resturants</button>
            </div>
            <div className='restro_card'>
                {filterList.map((res) => (<Link key={res.info.id} to={'/resturant/' + res.info.id}><ResturantCard restData={res}/></Link>))}
            </div>
        </div>
    )
}

export default Body