import { CDN_CARD_IMG_URL } from "../utils/constant";

const ResturantCard = (props) => {
    const restData = props;
    const {cloudinaryImageId, name, avgRating, cuisines, locality, sla} = restData.restData.info
    return (
        <div className='card'>
            <div className='restro_img '>
                <img alt='restro_img' src={ CDN_CARD_IMG_URL + cloudinaryImageId } />
            </div>
            <h2>{name}</h2>
            <h3>{avgRating} star  .{sla.deliveryTime}mins</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h5>{locality}</h5>
        </div>
        
    )
}

export default ResturantCard