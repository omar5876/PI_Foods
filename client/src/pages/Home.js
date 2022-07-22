import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getRecipes } from '../redux/Actions'
const Home = () => {

    let dispatch = useDispatch()
    let recipes = useSelector(state => state.getRecipes)
    console.log(recipes)

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])
    return (
        <div>
            Home
            {recipes.map(e => <div>{e.name}</div>)}
        </div>
    )
}

export default Home