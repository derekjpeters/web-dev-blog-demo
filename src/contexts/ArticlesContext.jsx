import { createContext, useContext, useState, useEffect } from 'react';
import { articles as seedArticles } from '../data/articles';

const ArticlesContext = createContext();

export const useArticles = () => {
	const context = useContext(ArticlesContext);
	if (!context) {
		throw new Error('useArticles must be used within an ArticlesProvider');
	}
	return context;
};

export const ArticlesProvider = ({ children }) => {
	const [articles, setArticles] = useState(seedArticles);

	const addArticle = (newArticle) => {
		setArticles(prev => [newArticle, ...prev]);
	};

	const getArticleById = (id) => {
		return articles.find(article => article.id === id);
	};

	return (
		<ArticlesContext.Provider value={{
			articles,
			addArticle,
			getArticleById
		}}>
			{children}
		</ArticlesContext.Provider>
	);
};