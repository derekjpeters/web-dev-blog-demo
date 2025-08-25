import { Link, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Modal from "../components/Modal";
import CreateArticleModal from "../components/CreateArticleModal";
import { useArticles } from "../contexts/ArticlesContext";

// Utility: slug from title
const toSlug = (s = "") =>
	s
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");

export default function Articles() {
	const navigate = useNavigate();
	const { articles, addArticle } = useArticles();
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		console.log("[Articles] mounted with", articles.length, "items"); // LOG
	}, []);

	const sorted = useMemo(() => {
		// If your mock has date fields, you can sort newest-first
		// For now, preserve order of insertion
		return articles;
	}, [articles]);

	const handleCreate = (form) => {
		// Build a unique id/slug
		let id = toSlug(form.title);
		if (!id) id = `article-${Date.now()}`;

		// Ensure uniqueness if same title is used again
		let uniqueId = id;
		let counter = 2;
		while (sorted.some((a) => a.id === uniqueId)) {
			uniqueId = `${id}-${counter++}`;
		}

        //orginal-2 - orginal-2 <--- will change to orginal-3

        /*
        orginalid-2 is a new string that gets built. Another string id gets built cause of the title is similar or the same the while loop will look into the sorted article list. If the IDs match or = true, then the new article ID will be renamed with originalid-3 *new* through the while look in handle create.
        */

		const newArticle = {
			id: uniqueId,
			title: form.title.trim(),
			author: form.author.trim(),
			summary: form.summary.trim(),
			content: form.content.trim(),
			date: new Date().toISOString().slice(0, 10),
			tags: [],
		};

		console.log("[Articles] adding new article:", newArticle); // LOG
		addArticle(newArticle);

		console.log("[Articles] navigate → /articles/" + uniqueId); // LOG
		navigate(`/articles/${uniqueId}?ref=created`);
	};

	return (
		<div className="container">
			<h1>Articles</h1>

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					margin: "0.5rem 0 1rem",
				}}
			>
				<p className="muted">
					{sorted.length} article{sorted.length === 1 ? "" : "s"}
				</p>
				<button
					onClick={() => {
						console.log("[Articles] open modal");
						setIsModalOpen(true);
					}}
				>
					+ New Article
				</button>
			</div>

			{sorted.map((a) => (
				<div className="card" key={a.id}>
					<h3>{a.title}</h3>
					<p className="muted">
						<em>author:</em> {a.author}{" "}
						{a.date ? (
							<>
								· <em>date:</em> {a.date}
							</>
						) : null}
					</p>
					<p>{a.summary}</p>
					<Link to={`/articles/${a.id}?ref=list`}>Read more →</Link>
				</div>
			))}

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<CreateArticleModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					onCreate={handleCreate}
				/>
			</Modal>
		</div>
	);
}

// export default function Articles() {
// 	console.log(articles)
//     return (
//         <div className='container'>
//             <h1>Articles</h1>
//             {articles.map(a => (

//                 <div className='card' key={a.id}>
//                 <h3>{a.title}</h3>
//                 <p>{a.summary}</p>

//                 <Link to={`/articles/${a.id}`} onClick={() => console.log(a.id)} >Read More</Link>

//                 </div>
//             ))}
//         </div>
//     )
// }
