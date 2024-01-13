import ResturantCard from "./ResturantCard"
import resList from "../utils/mockData"

const Body = () => {
    return (
        <div className='restro_card'>
            {resList.map((res) => (<ResturantCard key={res.info.id} restData={res}/>))}
        </div>
    )
}

export default Body