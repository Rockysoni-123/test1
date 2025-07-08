import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NewsList from '../components/NewsList';
import Pagination from '../components/Pagination';

const countries = ['United Arab Emirates', 'Argentina', 'Austria', 'Australia', 'Belgium', 'Bulgaria', 'Brazil', 'Canada', 'Switzerland', 'China', 'Colombia', 'Cuba','Czech Republic','Germany','Egypt','France','United Kingdom','Greece','hongKong','Hungary','Indonesia','Ireland','Israel','India','Italy','Japan','Korea','Lithuania','Latvia','Morocco','Mexico','Malaysia','Nigeria','Netherlands','Norway','New Zealand','philippines','Poland','Portugal','Romania','Serbia','Russian Federation','Saudi Arabia','Sweden','Singapore','Slovenia','Slovakia','Thailand','Turkey','Taiwan','Ukraine','United States','Venezuela','South Africa'];

const Country = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://news-app-seven-delta.vercel.app/country/${code}?page=${page}&pageSize=15`)
      .then(res => res.json())
      .then(data => setNews(data.articles || []))
      .catch(() => setNews([]));
  }, [code, page]);

  return (
    <div>
      <h2>Country: {code.toUpperCase()}</h2>

      <select value={code} onChange={(e) => navigate(`/country/${e.target.value}`)}>
        {countries.map(c => (
          <option key={c} value={c}>{c.toUpperCase()}</option>
        ))}
      </select>

      {news.length ? <NewsList articles={news} /> : <p>There is no news updates here.</p>}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Country;
