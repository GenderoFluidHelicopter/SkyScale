import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./SideBar.css";
import SearchComponent from './SearchComponent';


const Sidebar = () => {

  const [data, setData] = useState([]); // Пример состояния данных в Sidebar

  const handleSearchButtonClick = (searchQuery) => {
    // Вместо console.log можно выполнить вашу логику поиска и обновления данных
    // Например, отправка запроса на сервер с searchQuery
    console.log(`Search for: ${searchQuery}`);

    // Здесь обновите состояние данных в Sidebar
    setData(/* ваш новый массив данных, полученных в результате поиска */);
  };

  const handleSearchClose = () => {
    // Вместо console.log выполните вашу логику закрытия поиска
    console.log('Close search');

    // Здесь можете сбросить состояние данных, связанных с поиском
    setData([]);
  };

  const handlePreviousMatch = () => {
    // Вместо console.log выполните вашу логику перехода к предыдущему совпадению
    console.log('Navigate to previous match');
  };

  const handleNextMatch = () => {
    // Вместо console.log выполните вашу логику перехода к следующему совпадению
    console.log('Navigate to next match');
  };

  return (
    <div className='navPanel'>
        <NavLink className="barButton" to="/intro" activeClassName="active">
          <p>SkyScale</p>
        </NavLink>
        <NavLink className="barButton" to="/api" activeClassName="active">
          <p>API</p>
        </NavLink>
        <NavLink className="barButton" to="/pgs" activeClassName="active">
          <p>Demonstration</p>
        </NavLink>
        <NavLink className="barButton" to="/art" activeClassName="active">
          <p>Articles</p>
        </NavLink>
        <SearchComponent
        onSearchButtonClick={handleSearchButtonClick}
        onSearchClose={handleSearchClose}
        onPreviousMatch={handlePreviousMatch}
        onNextMatch={handleNextMatch}
      />
    </div>
  );
};

export default Sidebar;