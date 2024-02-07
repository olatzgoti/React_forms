import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <nav>
            <div>
            <span>
                <Link to = '/'>Home</Link>
            </span>
            <span>
                <Link to = '/contact'>Contact</Link>
            </span>
            </div>
        </nav>
    )
}

export default Home