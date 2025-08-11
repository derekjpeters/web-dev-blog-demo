import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

export default function Articles() {
    return (
        <div className='conatainer'>
            <h1>Articles</h1>
            {articles.map(a => (
                <div className='card' key={a.id}> 
                <h3>{a.title}</h3>
                <p>{a.summary}</p>
                <Link to={ `/articles/{a.id}`}>Read More</Link>
                </div>
            ))}
        </div>
    )
}