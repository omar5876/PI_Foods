import s from '../css/LandingPage.module.css'
import imgLandingPage from '../img/cooking.png'
const LandingPage = ({children}) => {
    return (
        <div className={s.landingPageContainer}>
            <img src={imgLandingPage}/>
            <div className={s.childrenContainer}>
                {children}
            </div>
        </div>
    )
}

export default LandingPage