import { useEffect, useRef, useState } from "react";
import './CardsDisplay.css';




const CardsDisplay = ({ cardData, showLike }) => {
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
        ? -((containerWidth - 60) / 4 + 21) // Landscape or larger screens
        : -((containerWidth - 35) / 2+21); // Portrait or smaller screens

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
        ? ((containerWidth - 60) / 4 + 21) // Landscape or larger screens
        : ((containerWidth -35) / 2+21); // Portrait or smaller screens

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
        
        {cardData.map(({ hotelimg, hotelname,  cityname, ratingNo, ratingWord,reviews,nights,priceCrossed, price }, index) => (
          <div className="select-card" key={index}>
            {showLike && <div class="overlay-circle" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="custom-svg"><path d="M23.3 5.076a6.582 6.582 0 0 0-10.446-1.71L12 4.147l-.827-.753a6.52 6.52 0 0 0-5.688-1.806A6.47 6.47 0 0 0 .7 5.075a6.4 6.4 0 0 0 1.21 7.469l9.373 9.656a1 1 0 0 0 1.434 0l9.36-9.638A6.41 6.41 0 0 0 23.3 5.076"></path></svg>
              </div>
            }
            <img className="hotel-image" src={hotelimg} alt={hotelname} />
            <div className="card-content d-flex">
                <div>
                    <p className='hotelname'>{hotelname}</p>
                    <p className='cityname'>{cityname}</p>
                    <p className='rating'><span className="rating-box">{ratingNo}</span> <span className="rating-word">{ratingWord} </span><span className="reviews">-{reviews}</span></p>
                </div>
                <div>
                    {price && <p className='price'> <span>{nights} nights</span> <span className="priceCrossed">₹ {priceCrossed}</span><span className="actualPrice">₹{price}</span></p>}
                </div>
            </div>
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

export default CardsDisplay;