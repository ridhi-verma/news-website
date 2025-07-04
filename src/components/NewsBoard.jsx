import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category, searchQuery }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = searchQuery
      ? `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${import.meta.env.VITE_API_KEY}`
      : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error(error));
  }, [category, searchQuery]);

  return (
    <div className="container">
      <h2 className="text-center mb-4">
        Discover the Latest <span className="badge bg-danger">Headlines</span>
      </h2>

      <div className="row">
        {articles.map((news, index) => (
          <div className="col-md-4" key={index}> {/* Consistent grid structure */}
            <NewsItem title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
