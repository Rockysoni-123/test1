
import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ articles }) => {
  return (
    <div className="news-list">
      {articles.map((item, idx) => <NewsCard key={idx} article={item} />)}
    </div>
  );
};

export default NewsList;