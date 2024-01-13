import ResturantCard from "./ResturantCard"
import resList from "../utils/mockData"
import {useState} from 'react'

const Body = () => {
    const [restroList, setRestroList] = useState(resList);
    return (
        <div className="body">
            <button className="top_res_btn" onClick={() => {
                const filterData = resList.filter((res) => res.info.avgRating > 4.5);
                setRestroList(filterData);
            }}>Top Resturants</button>
            <div className='restro_card'>
                {restroList.map((res) => (<ResturantCard key={res.info.id} restData={res}/>))}
            </div>
        </div>
    )
}

export default Body