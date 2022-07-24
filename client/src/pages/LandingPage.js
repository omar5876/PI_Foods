
import { useLocation } from 'react-router-dom'
import s from '../css/LandingPage.module.css'

const LandingPage = ({children}) => {
    
    let location = useLocation()
    console.log()
    return (
        <div className={s.landingPageContainer } >
            <div className={s.childrenContainer}>
                {children}
            </div>
        </div>
    )
}

export default LandingPage