import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard'; // Ensure the path is correct

export default function LocalNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(
          'https://gnews.io/api/v4/search?q=pittsburgh&category=general&apikey=80509269cd1bb9e61e52877670327c69&lang=en',
        );
        setNews(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNews();
  }, []);

  return (
    <section className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map((article, index) => (
          <NewsCard
            key={index}
            article={article}
          />
        ))}
      </div>
    </section>
  );
}
