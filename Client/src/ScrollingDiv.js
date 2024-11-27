import React, { useEffect, useRef, useState } from 'react';
import './ScrollingDiv.css';

const ScrollingDiv = () => {
  const divRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (divRef.current && !isScrolling) {
        setIsScrolling(true);
        divRef.current.scrollTop += 36; // Adjust the scroll amount as needed

        setTimeout(() => {
          if (divRef.current && divRef.current.scrollTop + divRef.current.clientHeight >= divRef.current.scrollHeight) {
            divRef.current.style.scrollBehavior = 'auto';
            divRef.current.scrollTop = 0; // Scroll back to the beginning
            divRef.current.style.scrollBehavior = 'smooth';
          }
          setIsScrolling(false);
        }, 2000); // Adjust the pause duration
      }
    }, 2000); // Adjust the overall scrolling interval

    return () => clearInterval(intervalId);
  }, [isScrolling]);

  return (
    <div className="animated-divs" ref={divRef} >
      <div className="animated-divs-inner">
        <div>apartments</div>
        <div>villas</div>
        <div>aparthotels</div>
        <div>holiday homes</div>
        <div>cottages</div>
        <div>homes</div>
        <div style={{marginTop:'2px'}}>apartments</div>
      </div>
    </div>
  );
};

export default ScrollingDiv;