import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import Footer from './components/Footer';

const App = () => {
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar setCategory={setCategory} onSearch={handleSearch} />
      <NewsBoard category={category} searchQuery={searchQuery} />
      <Footer />
    </div>
  );
};

export default App;
