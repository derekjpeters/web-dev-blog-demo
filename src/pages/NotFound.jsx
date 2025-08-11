import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className='container'>
            <h1>404</h1>
            <p>This page doesn't exist</p>
            <Link to="/">Return to the Home Page</Link>
        </div>
    )
}