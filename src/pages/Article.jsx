import { Outlet, useSearchParams, useParams, Link } from 'react-router-dom';
import { useArticles } from '../contexts/ArticlesContext';

export default function Article() {
    const { id } = useParams();
    const { getArticleById } = useArticles();
    // const [useSearchParams] = useSearchParams();
    // const ref = useSearchParams.get('ref');

    const article = getArticleById(id);

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
            <p className="muted">
                <em>author:</em> {article.author}
                {article.date ? (
                    <>
                        {" · "}
                        <em>date:</em> {article.date}
                    </>
                ) : null}
            </p>
            <p><em>slug:</em> {article.id}</p>
            <p>{article.summary}</p>
            
            {(article.content || article.body) && (
                <div className="article-content">
                    <h3>Content:</h3>
                    <div style={{ whiteSpace: 'pre-wrap' }}>
                        {article.content || article.body}
                    </div>
                </div>
            )}
            
            <p><Link to="/articles">← All Articles</Link></p>
        </div>
    )
}