import {useState,useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import {getFilteredCategory} from "../api";
import {Preloader} from "../conponents/Preloader";
import {MealList} from "./MealList";

function Category() {
    const [meals,setMeals ] = useState([])
    const {name} = useParams()
    const {goBack} = useHistory()
    useEffect(() => {
        getFilteredCategory(name).then((data)=>setMeals(data.meals))
    }, [name])

    return <>
        <button className="btn" onClick={goBack}>Go Back</button>
        {!meals.length? <Preloader/>:<MealList meals={meals}/>}
    </>
}

export {Category}