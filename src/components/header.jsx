import React from 'react';
import './header.css'

const Header = () => {
  const companyLogo = 'https://www.terriblytinytales.com/img/home/ttt.svg';

  const handleCoursesButtonClick = () => {
   
  };

  return (
    <header className="header">
      <div className="left-container">
        <img src={companyLogo} alt="Company Logo" className="logo" />
        <div className="line"></div>
        <h4 className="logo-text">  STORIES</h4>
      </div>
      <div className="right-container">
        <button onClick={handleCoursesButtonClick} className="button">
          Courses
        </button>
      </div>
    </header>
  );
};

export default Header;
