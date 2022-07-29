import { Link } from "react-router-dom"

const InitialPage = () => {
    return (
        <div>
            <h2>Learn about cooking</h2>
            <Link to={'/Home'}>
                <button>Enter</button>
            </Link>
        </div>
    )
}

export default InitialPage