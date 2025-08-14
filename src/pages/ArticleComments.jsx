import { useParams } from "react-router-dom";

export default function ArticleComments() {
    const { id } = useParams();

    return (
        <div className="card">
            <h3>Comments</h3>
            <ul>
                <li>Great Post!</li>
                <li>Thanks for the info.</li>
            </ul>
        </div>
    )
}