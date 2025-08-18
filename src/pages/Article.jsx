import { Outlet, useSearchParams, useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';

export default function Article() {
    const { id } = useParams();
    // const [useSearchParams] = useSearchParams();
    // const ref = useSearchParams.get('ref');

    const article = articles.find(a => a.id === id);

    console.log(article)
    if (!article) {
        return (
            <div className='container'>
                <h1>Article Not Found</h1>
                <p>We couldn't find an article for id: <code>{id}</code></p>
                <Link to="/articles">Back to Articles</Link>
            </div>
        )
    }

    return (
        <div className='container'>
            <h1>{article.title}</h1>
            <p><em>slug:</em> {article.id} </p>
            <p>{article.summary}</p>
            
            <p><Link to="/articles">All Articles</Link></p>
        </div>
    )
}