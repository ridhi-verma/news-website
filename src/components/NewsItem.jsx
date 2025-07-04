import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import image from '../assets/news.jpg';

const NewsItem = ({ title, description, src, url }) => {
  const defaultSrc = src ? src : image;

  const maxDescriptionLength = 90;
  const shortenedDescription = description
    ? description.slice(0, maxDescriptionLength) + (description.length > maxDescriptionLength ? '...' : '')
    : 'Lorem ipsum dolor sit amet...';

  return (
    <motion.div
      className="card bg-dark text-light mb-3 d-inline-block my-4 mx-3 px-2 py-2"
      style={{ maxWidth: '325px', minHeight: '450px' }} // Consistent size
      whileHover={{ y: -10, scale: 1.05 }} // Slide up and slightly enlarge on hover
      transition={{ duration: 0.3 }} // Animation speed
    >
      <img
        src={defaultSrc}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }} // Consistent image size
        alt="News"
        onError={(e) => (e.target.src = image)}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{shortenedDescription}</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </motion.div>
  );
};

export default NewsItem;
