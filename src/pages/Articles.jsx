import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

export default function Articles() {
	console.log(articles)
    return (
        <div className='container'>
            <h1>Articles</h1>
            {articles.map(a => (
				
                <div className='card' key={a.id}> 
                <h3>{a.title}</h3>
                <p>{a.summary}</p>
				
                <Link to={`/articles/${a.id}`} onClick={() => console.log(a.id)} >Read More</Link>
				
                </div>
            ))}
        </div>
    )
}