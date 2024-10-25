import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FooterColumn = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownContent = isOpen && (
    <div className='footer-dropdown'>
      {items.map((item, index) => (
        <a href='/' key={index}>
          <p>{item}</p>
        </a>
      ))}
    </div>
  );

  const arrowIcon = isOpen ? faChevronUp : faChevronDown;

  return (
    <div className='footer-columns'>
      <div className='d-flex'>
        <h6>{title}</h6>
        <button className='button-icon' onClick={toggleDropdown}>
           <FontAwesomeIcon icon={arrowIcon} />
        </button>
      </div>
      {dropdownContent}
    </div>
  );
};

export default FooterColumn;
