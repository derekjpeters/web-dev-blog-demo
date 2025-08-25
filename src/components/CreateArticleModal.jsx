import { useEffect, useState } from "react";

export default function CreateArticleModal({ isOpen, onClose, onCreate }) {
	const [form, setForm] = useState({
		title: "",
		author: "",
		summary: "",
		content: "",
	});

	// Reset when opened/closed
	useEffect(() => {
		if (isOpen) {
			console.log("[CreateArticleModal] opened"); // LOG
			setForm({ title: "", author: "", summary: "", content: "" });
		}
	}, [isOpen]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log("[CreateArticleModal] change:", { name, value }); // LOG
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const validate = () => {
		if (!form.title.trim()) return "Title is required.";
		if (!form.author.trim()) return "Author is required.";
		if (!form.summary.trim()) return "Summary is required.";
		if (!form.content.trim() || form.content.trim().length < 20)
			return "Content should be at least 20 characters.";
		return null;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const err = validate();
		if (err) {
			console.log("[CreateArticleModal] validation failed:", err); // LOG
			alert(err);
			return;
		}
		console.log("[CreateArticleModal] submit payload:", form); // LOG
		onCreate(form); // parent handles id creation + navigation
		onClose();
	};

	if (!isOpen) return null;

	return (
		<form onSubmit={handleSubmit}>
			<h2 style={{ marginTop: 0 }}>Create New Article</h2>

			<label>
				Title
				<input
					type="text"
					name="title"
					value={form.title}
					onChange={handleChange}
					placeholder="Enter your title of your article"
				/>
			</label>
			<br />

			<label>
				Author
				<input
					type="text"
					name="author"
					value={form.author}
					onChange={handleChange}
					placeholder="example: Derek Peters"
				/>
			</label>
			<br />

			<label>
				Summary
				<input
					type="text"
					name="summary"
					value={form.summary}
					onChange={handleChange}
					placeholder="One liner about your article"
				/>
			</label>
			<br />

			<label>
				Content
				<textarea
					name="content"
					value={form.content}
					onChange={handleChange}
					placeholder="Write the article body…"
					rows={8}
				/>
			</label>
			<br />

			<div
				style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}
			>
				<button type="button" onClick={onClose}>
					Cancel
				</button>
				<button type="submit">Create</button>
			</div>
		</form>
	);
}
