import { useEffect } from "react";

// Simple accessible modal: backdrop click closes; ESC closes; focus hint
export default function Modal({ isOpen, onClose, children }) {
	useEffect(() => {
		if (!isOpen) return;

		const onKeyDown = (e) => {
			if (e.key === "Escape") {
				console.log("[Modal] ESC pressed → close"); // LOG
				onClose();
			}
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div
			aria-modal="true"
			role="dialog"
			aria-label="Create Article"
			onClick={(e) => {
				if (e.target === e.currentTarget) {
					console.log("[Modal] backdrop click → close"); // LOG
					onClose();
				}
			}}
			style={{
				position: "fixed",
				inset: 0,
				display: "grid",
				placeItems: "center",
				background: "rgba(0,0,0,0.55)",
				zIndex: 50,
				padding: "1rem",
			}}
		>
			<div
				style={{
					width: "min(720px, 96vw)",
					background: "#111827",
					border: "1px solid #374151",
					borderRadius: 12,
					padding: "1rem",
				}}
			>
				{children}
			</div>
		</div>
	);
}
