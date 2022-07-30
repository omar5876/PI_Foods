import s from '../css/CreateRecipe.module.css'
import {useState} from 'react'

const CreateRecipe = () => {
    let [objectStep, setObjectStep] = useState({number: 0, step: ''})
    let [arraySteps, setArraySteps] = useState([])
    let [input, setInput] = useState({name: '', summary: '', healthScore: 0, steps: arraySteps})

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
    
    return (
        <div className={s.createRecipeContainer}>
            Create Recipe
            <form>
                <label>Name</label>
                <input type={'text'} placeholder='write a name' required name='name' value={input.name} onChange={handleChange}/>
                <label>Summary</label>
                <textarea type={'text'} placeholder='write a name' required name='summary' value={input.summary} onChange={handleChange}/>
                <label>Health Score</label>
                <input type={'number'} placeholder='write a name' name='healthScore' value={input.healthScore} onChange={handleChange}/>
                <label>Steps</label>
                    <div>
                        <label>Number</label>
                        <input type={'number'} name='number' value={objectStep.number} onChange={ handleChangeObjectStep}/>
                        <label>Step</label>
                        <textarea type={'text'}  name='step' value={objectStep.step} onChange={handleChangeObjectStep}/>
                        <button type='button' onClick={addStep}>Add Step</button>
                    </div>
                <input type='submit' value='Create Recipe'/>

            </form>
        </div>
    )
}

export default CreateRecipe