import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import ArticleComments from "./pages/ArticleComments";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";


export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/articles/:id" element={<Article />}>
        <Route path="comments" element={<ArticleComments />} />
        </Route>
				  
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou/>} />
				<Route path="*" element={<NotFound />} />

			</Routes>
		</>
	);
}
