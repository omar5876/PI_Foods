import s from '../css/Home.module.css'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getRecipes } from '../redux/Actions'
import RecipeCard from '../components/RecipeCard'


const Home = () => {

    let dispatch = useDispatch()
    let recipes = useSelector(state => state.getRecipes)
    console.log(recipes)

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])
    return (
        <div className={s.homeContainer}>
            {recipes.map(e => <RecipeCard name={e.name} image={e.image} diets={e.diets}/>)}
        </div>
    )
}

export default Home