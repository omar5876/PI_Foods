import s from '../css/CreateRecipe.module.css'
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getDiets } from '../redux/Actions'
import axios from 'axios'

const CreateRecipe = () => {
    let [objectStep, setObjectStep] = useState({number: 0, step: ''})
    let [arraySteps, setArraySteps] = useState([])
    let [input, setInput] = useState({name: '', summary: '', image: '', healthScore: 0, steps: arraySteps, diets: []})

    let diets = useSelector(state => state.getDiets)
    console.log(diets)

    let dispatch = useDispatch()

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeObjectStep = (e) => {
        setObjectStep({
            ...objectStep,
            [e.target.name]: e.target.value
        })
    }

    const addStep = () => {
        let newStep = {number: objectStep.number, step: objectStep.step}
        arraySteps.push(newStep)
        console.log(arraySteps)
        setObjectStep({number: 0, step: ''})
    }

    const handleSelectDiet = (e) => {
        if(!input.diets.includes(e.target.value)){
            setInput({
                ...input,
                diets: [...input.diets, e.target.value]
            })
        }
    }

    const handleSubmit = (e) => {
        try {
            e.preventDefault()
            axios.post('http://localhost:3001/recipes', input)
            .then(res => alert('Recipe Created'))
            
        } catch (error) {
            alert("It coudn't be created")
        }
    }

    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])
    
    return (
        <div className={s.createRecipeContainer}>
            <form >
                <label>Name</label>
                <input type={'text'} placeholder='write a name' required name='name' value={input.name} onChange={handleChange}/>
                <label>Summary</label>
                <textarea type={'text'} placeholder='write a name' required name='summary' value={input.summary} onChange={handleChange}/>
                <label>Image</label>
                <input type={'text'} placeholder='Put an url' required name='image' value={input.image} onChange={handleChange}/>
                <label>Health Score</label>
                <input type={'number'} placeholder='write a name' name='healthScore' value={input.healthScore} onChange={handleChange}/>
                <label>Steps</label>
                    <div>
                        <label>Number</label>
                        <input type={'number'} name='number' value={objectStep.number} onChange={ handleChangeObjectStep}/>
                        <label>Step</label>
                        <textarea type={'text'}  name='step' value={objectStep.step} onChange={handleChangeObjectStep}/>
                        <button type='button' onClick={addStep}>Add Step</button>
                        {!!input.steps.length &&
                        <div>
                            {input.steps.map((e, k) => {
                                return (
                                    <table key={k}>
                                        <tr>
                                            <th>Number</th>
                                            <td>{e.number}</td>
                                        </tr>
                                        <tr>
                                            <th>Step</th>
                                            <td>{e.step}</td>
                                        </tr>
                                    </table>
                                )
                            })}    
                        </div>}
                    </div>

                {!!diets.length && (
                    <>
                    <label>Diets</label>
                    <select onChange={handleSelectDiet}>
                        <option  disabled selected>Choose a Type of Diet</option>
                        {diets.map((e, k) => <option key={k} value={e.name}>{e.name}</option>)}
                    </select>
                    {
                        !!input.diets.length &&
                        <div>
                            {input.diets.map((e, k) => <div key={k}>{e}</div>)}
                        </div>
                    }

                    </>
                )}
                <input type='submit' value='Create Recipe' onClick={handleSubmit}/>

            </form>
        </div>
    )
}

export default CreateRecipe