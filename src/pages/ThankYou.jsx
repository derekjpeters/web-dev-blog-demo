import { Link } from 'react-router-dom';

export default function ThankYou() {
    return (
        <div className='container'>
            <h1>Thank You!</h1>
            <p>Your message has been recieved.</p>
            <Link to="/">Go back Home</Link>
        </div>
    )
}