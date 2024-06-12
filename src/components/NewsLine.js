import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { NewsLineContainer, ScrollingText } from './styles';

const NewsLine = () => {
  const [news, setNews] = useState([]);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(30); // Initial scroll speed (adjust as needed)
  const textRef = useRef(null);

  useEffect(() => {
    // Fetch news from the API
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'technology',
            from: '2024-06-11',
            sortBy: 'popularity',
            apiKey: '79bb52e4667749c3aa86af985ac19af6',
          },
        });
        console.log(response.data); // Log response data to console
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    // Calculate scroll speed dynamically based on text and container width
    if (textRef.current) {
      const textWidth = textRef.current.offsetWidth;
      const containerWidth = textRef.current.parentElement.offsetWidth;
      const newScrollSpeed = (textWidth + containerWidth) / 100; // Adjust the divisor as needed for desired speed
      setScrollSpeed(newScrollSpeed);
    }
  }, [news]);

  useEffect(() => {
    // Scroll to the next article when the current article is fully scrolled
    const interval = setInterval(() => {
      if (textRef.current) {
        const textElement = textRef.current;
        const maxScrollLeft = textElement.scrollWidth - textElement.clientWidth;
        if (textElement.scrollLeft === maxScrollLeft) {
          setCurrentArticleIndex(prevIndex => (prevIndex + 1) % news.length);
          textElement.scrollLeft = 0; // Reset scroll position to start
        } else {
          textElement.scrollLeft += 1; // Scroll horizontally
        }
      }
    }, 50); // Adjust scroll speed (interval duration) as needed

    return () => clearInterval(interval);
  }, [news]);

  // Render loading message if news is not yet fetched
  if (news.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <NewsLineContainer>
      <ScrollingText ref={textRef} style={{ animationDuration: `${scrollSpeed}s` }}>
        {news.map((article, index) => (
          <span key={index}>{article.title} | </span>
        ))}
      </ScrollingText>
    </NewsLineContainer>
  );
};

export default NewsLine;
