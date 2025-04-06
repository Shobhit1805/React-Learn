import { useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [ResInfo , setResInfo] = 

    useEffect(() => {
        fetchMenu();
    } ,[]);

    const fetchMenu = async () => {
        const data = await fetch (
            "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.6792086&lng=75.8778323&restaurantId=882432&submitAction=ENTER"
        );
        const json = await data.json();
        setResInfo(json.data)
    }
    if (ResInfo === null ) return <Shimmer />;

    return (
        <div className="menu">
            <h1>{ResInfo?.cards[0]?.card?.card?.info?.name}</h1>
            <h2>Menu:</h2>
            <ul>
                <li>Burger</li>
                <li>Pizza</li>
                <li>Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;

