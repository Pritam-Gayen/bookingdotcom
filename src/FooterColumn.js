import React, { useState,  useEffect} from 'react';
import './FooterColumn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FooterColumn = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(() => {
    // Check initial orientation
    return window.innerWidth > window.innerHeight;
  });

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsOpen(window.innerWidth < window.innerHeight);
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange',  
 handleOrientationChange);
    };
  }, []);

  
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
      <div className='footer-columns-inner'>
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
