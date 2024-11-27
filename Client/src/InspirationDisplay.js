import { useEffect, useRef, useState } from "react";
import './InspirationDisplay.css';




const InspirationDisplay = ({ cardData }) => {
  const cardcontainerRef = useRef(null);
  const [cardScrollable, setCardScrollable] = useState({ left: false, right: true });

  useEffect(() => {
    const containerRef = cardcontainerRef.current;

    const handleScroll = () => {
      if (containerRef) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef;
        setCardScrollable({
          left: scrollLeft > 0,
          right: scrollLeft < scrollWidth - clientWidth
        });
      }
    };

    if (containerRef) {
      containerRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (containerRef) {
        containerRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);



  const handleScrollLeft = () => {
    if (cardcontainerRef.current) {
      const containerWidth = cardcontainerRef.current.clientWidth;
      const scrollAmount = (containerWidth > 600)
        ? -((containerWidth - 60) / 4 + 21)*2 // Landscape or larger screens
        : -((containerWidth - 35) / 2 + 21)*2; // Portrait or smaller screens

      cardcontainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollRight = () => {
    if (cardcontainerRef.current) {
      const containerWidth = cardcontainerRef.current.clientWidth;
      const scrollAmount = (containerWidth > 600)
        ? ((containerWidth - 60) / 4 + 21)*2 // Landscape or larger screens
        : ((containerWidth - 35) / 2 + 21)*2; // Portrait or smaller screens

      cardcontainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };


  return (
    <div className="cards-display-container d-flex">
      {cardScrollable.left && (
        <button class="cards-display-left" onClick={handleScrollLeft}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-rtl-flip="true"><path d="M15.087 19.236a.9.9 0 0 1-.642-.266l-6.057-6.057A1.3 1.3 0 0 1 8 11.968c-.008-.35.123-.69.364-.945l6.057-6.057a.91.91 0 0 1 1.284 0 .895.895 0 0 1 0 1.284l-5.694 5.718 5.718 5.718a.896.896 0 0 1 0 1.284.88.88 0 0 1-.642.266"></path></svg>
        </button>
      )}
      <div className="cards-holder container d-flex" ref={cardcontainerRef}>
        {cardData.map(({ image, heading1, heading2 }, index) => (
        <div className= {index === 0 ? 'big-card' : 'small-card'} key={index}>
            {index===0 ? null : <img src={image} alt={'not found'} />}
            <h5>{heading1}</h5>
            <p>{heading2}</p>
        </div>
        ))}
      </div>
      {cardScrollable.right && (
        <button class="cards-display-right" onClick={handleScrollRight}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-rtl-flip="true"><path d="M8.913 19.236a.9.9 0 0 0 .642-.266l6.057-6.057a1.3 1.3 0 0 0 .388-.945c.008-.35-.123-.69-.364-.945L9.58 4.966a.91.91 0 0 0-1.284 0 .896.896 0 0 0 0 1.284l5.694 5.718-5.718 5.718a.896.896 0 0 0 0 1.284.88.88 0 0 0 .642.266"></path></svg>
        </button>
      )}
    </div>
  );
};

export default InspirationDisplay;