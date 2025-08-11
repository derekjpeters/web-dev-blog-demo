import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />

      <Route path="/articles/:id" element={<Article />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )

}