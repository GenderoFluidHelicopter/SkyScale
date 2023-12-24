// SearchComponent.js
import React, { useState, useEffect } from 'react';

const SearchComponent = ({ onSearchButtonClick, onSearchClose, onPreviousMatch, onNextMatch }) => {
  const [query, setQuery] = useState('');
  const [matchCount, setMatchCount] = useState(0);
  const [isSearchPending, setIsSearchPending] = useState(false);
  const [canNavigate, setCanNavigate] = useState(false);
  const [currentMatch, setCurrentMatch] = useState(0);

  useEffect(() => {
    const handleSearch = () => {
      if (isSearchPending) {
        const matches = window.find(query, false, false, true, false, false, false);
        setMatchCount(matches ? window.getSelection().rangeCount : 0);
        setCurrentMatch(0);
        setIsSearchPending(false);
      }
    };

    handleSearch();

    window.addEventListener('input', handleSearch);

    return () => {
      window.removeEventListener('input', handleSearch);
    };
  }, [query, isSearchPending]);

  useEffect(() => {
    setCanNavigate(matchCount > 0);
  }, [matchCount]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchButtonClick = () => {
    setIsSearchPending(true);
    onSearchButtonClick(); // Передача события в родительский компонент
  };

  const handleSearchClose = () => {
    setQuery('');
    setIsSearchPending(false);
    setCurrentMatch(0);
    onSearchClose(); // Передача события в родительский компонент
  };

  const handleNextMatch = () => {
    if (canNavigate && currentMatch < matchCount - 1) {
      setCurrentMatch((prev) => prev + 1);
      onNextMatch(); // Передача события в родительский компонент
    }
  };

  const handlePreviousMatch = () => {
    if (canNavigate && currentMatch > 0) {
      setCurrentMatch((prev) => prev - 1);
      onPreviousMatch(); // Передача события в родительский компонент
    }
  };

  return (
    <div className="search-component">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search on the page..."
      />
      <button onClick={handleSearchButtonClick}>Search</button>
      <button onClick={handleSearchClose}>Close</button>
      <button onClick={handlePreviousMatch} disabled={!canNavigate || currentMatch === 0}>
        Previous
      </button>
      <button onClick={handleNextMatch} disabled={!canNavigate || currentMatch === matchCount - 1}>
        Next
      </button>
    </div>
  );
};

export default SearchComponent;
