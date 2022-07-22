import s from '../css/Navbar.module.css'
import {Link} from 'react-router-dom'
import navImage from '../img/navbarImage.jpg'

const Navbar = () => {
    return (
        <div className={s.navbarContainer}>
            <div className={s.navbarItems}>
                <img src={navImage}/> 

            <ul >
                <li><Link className={s.navbarLinks} to={'/Home'}>All Recipes</Link></li>
                <li><Link className={s.navbarLinks} to={'/Create'}>Create Recipe</Link></li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar