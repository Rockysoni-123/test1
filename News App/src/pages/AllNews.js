import React, { useEffect, useState } from 'react';
import NewsList from '../components/NewsList';
import Pagination from '../components/Pagination';

const AllNews = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://news-app-seven-delta.vercel.app/all-news?page=${page}&pageSize=15`)
      .then(res => res.json())
      .then(data => setNews(data.articles || []))
      .catch(() => setNews([]));
  }, [page]);

  return (
    <div>
      <h2>All News</h2>
      {news.length ? <NewsList articles={news} /> : <p>There is no news updates here.</p>}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default AllNews;
