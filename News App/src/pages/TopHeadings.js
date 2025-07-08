import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NewsList from '../components/NewsList';
import Pagination from '../components/Pagination';

const categories = ['business', 'Entertainment', 'General', ' Health', 'science', 'sports', 'Technology'];

const TopHeadings = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://news-app-seven-delta.vercel.app/top-headlines?language=en&category=${category}&page=${page}&pageSize=15`)
      .then(res => res.json())
      .then(data => setNews(data.articles || []))
      .catch(() => setNews([]));
  }, [category, page]);

  return (
    <div>
      <h2>Top Headlines: {category}</h2>

      <select value={category} onChange={(e) => navigate(`/top-headlines/${e.target.value}`)}>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
        ))}
      </select>

      {news.length ? <NewsList articles={news} /> : <p>There is no news updates here.</p>}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default TopHeadings;
