import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
// import DateRangePicker from './DateRangePicker';
import TabbedDateRangePicker from './TabbedDateRangePicker';

import AgraImg from './Places/Agra.jpg';
import BhuwaneshwarImg from './Places/Bhuwaneshwar.jpg';
import BodhgayaImg from './Places/Bodhgaya.jpg';
import HyderabadImg from './Places/Hyderabad.jpg';
import KhajurahoImg from './Places/Khajuraho.jpg';
import KolkataImg from './Places/Kolkata.jpg';
import VaranasiImg from './Places/Varanasi.jpg';


const places = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
  'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'
];
const countries = {
  'New York': 'USA',
  'Los Angeles': 'USA',
  'Chicago': 'USA',
  'Houston': 'USA',
  'Phoenix': 'USA',
  'Philadelphia': 'USA',
  'San Antonio': 'USA',
  'San Diego': 'USA',
  'Dallas': 'USA',
  'San Jose': 'USA'
};
const cities = [
  { cityname: 'Agra', cityimg: AgraImg, km:'1164 km away' },
  { cityname: 'Bhuwaneshwar', cityimg: BhuwaneshwarImg, km:'362 km away' },
  { cityname: 'Bodhgaya', cityimg: BodhgayaImg, km:'420 km away' },
  { cityname: 'Hyderabad', cityimg: HyderabadImg, km:'1183 km away' },
  { cityname: 'Khajuraho', cityimg: KhajurahoImg, km:'896 km away' },
  { cityname: 'Kolkata', cityimg: KolkataImg, km:'4 km away' },
  { cityname: 'Varanasi', cityimg: VaranasiImg, km:'627 km away' }
];

function showList() {
  const listBox = document.getElementById('list-box');
  listBox.innerHTML = ''
  const heading = document.createElement('h4');
  heading.innerHTML = 'Popular nearby destinations';
  listBox.appendChild(heading);
  // Select 5 random places
  const randomPlaces = places.sort(() => 0.5 - Math.random()).slice(0, 5);

  randomPlaces.forEach(place => {
    // Create a new SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', '0 0 24 24');

    // Create a new path element
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', "M15 8.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0m1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0M12 1.5a6.75 6.75 0 0 1 6.75 6.75c0 2.537-3.537 9.406-6.75 14.25-3.214-4.844-6.75-11.713-6.75-14.25A6.75 6.75 0 0 1 12 1.5M12 0a8.25 8.25 0 0 0-8.25 8.25c0 2.965 3.594 9.945 7 15.08a1.5 1.5 0 0 0 2.5 0c3.406-5.135 7-12.115 7-15.08A8.25 8.25 0 0 0 12 0");
    path.setAttribute('fill', '#000000');

    // Append the path to the SVG element
    svg.appendChild(path);

    const svgholderDiv = document.createElement('div');
    svgholderDiv.classList.add('location-icon-holder');
    svgholderDiv.appendChild(svg);

    // Create the main div with class "location-place-holder"
    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location-place-holder');

    // Create the div for town name with class "townname"
    const townDiv = document.createElement('div');
    townDiv.classList.add('townname');
    townDiv.textContent = place; // Set the text content

    // Create the div for country name with class "countryname"
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('countryname');
    countryDiv.textContent = countries[place]; // Set the text content

    // Append townDiv and countryDiv to locationDiv
    locationDiv.appendChild(townDiv);
    locationDiv.appendChild(countryDiv);

    const locationHolder = document.createElement('div');
    locationHolder.classList.add('location-holder');
    locationHolder.appendChild(svgholderDiv);
    locationHolder.appendChild(locationDiv);

    listBox.classList.add('list-box');
    listBox.appendChild(locationHolder);
  });

  listBox.style.display = 'block';
}

// Hide the list box when clicking outside
document.addEventListener('click', function (event) {
  const inputContainer = document.querySelector('.box-filling-input');
  const listBox = document.getElementById('list-box');

  // Check if the click happened outside both the input container and the list box
  if (!inputContainer.contains(event.target) && !listBox.contains(event.target)) {
    listBox.style.display = 'none';
  }
});

// function showCalenderHolder() {
//   const showCalenderHolderDiv = document.getElementById('show-calender-holder');
//   showCalenderHolderDiv.style.display = 'block';
// }
const showCalenderHolder = () => {
  const relativeContainer = document.getElementsByClassName('box-filling-holder');
  // const relativeContainerRect = relativeContainer.getBoundingClientRect();
  const showCalenderHolderDiv = document.getElementById('show-calender-holder');
  const showCalender = document.getElementsByClassName('show-calender');
  // const showCalenderRect = showCalender.getBoundingClientRect();
  // showCalenderHolderDiv.style.left = `${showCalenderRect.left - relativeContainerRect.left}px`;
  // showCalenderHolderDiv.style.top = `${showCalenderRect.bottom - relativeContainerRect.top}px`;
  // setIsVisible(true);

  const relativeContainerRect = relativeContainer[0].getBoundingClientRect();
  const showCalenderRect = showCalender[0].getBoundingClientRect();
  showCalenderHolderDiv.style.left = `${showCalenderRect.left - relativeContainerRect.left + 5}px`;
  showCalenderHolderDiv.style.top = `${showCalenderRect.bottom - relativeContainerRect.top + 10}px`;
  showCalenderHolderDiv.style.display = 'block';
};
// Hide the showCalenderHolderDiv when clicking outside
document.addEventListener('click', function (event) {
  const showCalender = document.querySelector('.show-calender');
  const showCalenderHolderDiv = document.getElementById('show-calender-holder');
  const showCalenderHolderDivChildren = document.querySelectorAll('#show-calender-holder *');
  let isChild = false;

  showCalenderHolderDivChildren.forEach(child => {
    if (child.contains(event.target)) {
      isChild = true;
    }
  });

  if (!isChild && !showCalender.contains(event.target)) {
    showCalenderHolderDiv.style.display = 'none';
  }
});


const showGuestCount = () => {
  const personIconDiv = document.getElementsByClassName('person-icon-div');
  const guestCountDiv = document.getElementById('guest-count-div');
  const boxFillingHolder = document.getElementsByClassName('box-filling-holder');
  const personIconDivRect = personIconDiv[0].getBoundingClientRect();
  const boxFillingHolderRect = boxFillingHolder[0].getBoundingClientRect();
  const searchBtn = document.getElementsByClassName('search-btn');
  const searchBtnRect = searchBtn[0].getBoundingClientRect();

  guestCountDiv.style.right = `${searchBtnRect.right - personIconDivRect.right + 5}px`;
  guestCountDiv.style.top = `${boxFillingHolderRect.bottom - boxFillingHolderRect.top + 12}px`;
  guestCountDiv.style.display = 'block';
};

// Hide the showGuestCountDiv when clicking outside
document.addEventListener('click', function (event) {
  const personIconDiv = document.querySelector('.person-icon-div');
  const guestCountDiv = document.getElementById('guest-count-div');
  const showGuestCountDivChildren = document.querySelectorAll('#guest-count-div *');
  let isChild = false;

  showGuestCountDivChildren.forEach(child => {
    if (child.contains(event.target)) {
      isChild = true;
    }
  });

  if (!isChild && !personIconDiv.contains(event.target)) {
    guestCountDiv.style.display = 'none';
  }
});


const CitiesDisplay = () => {
  const citycontainerRef = useRef(null);
  const [cityScrollable, setCityScrollable] = useState({ left: false, right: true });

  useEffect(() => {
    const handleScroll = () => {
      if (citycontainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = citycontainerRef.current;
        setCityScrollable({
          left: scrollLeft > 0,
          right: scrollLeft < scrollWidth - clientWidth
        });
      }
    };

    if (citycontainerRef.current) {
      citycontainerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      const currentRef = citycontainerRef.current;
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);


  const handleScrollLeft = () => {
    if (citycontainerRef.current) {
      citycontainerRef.current.scrollBy({
        left: -(citycontainerRef.current.clientWidth / 6),
        behavior: 'smooth'
      });
    }
  };

  const handleScrollRight = () => {
    if (citycontainerRef.current) {
      citycontainerRef.current.scrollBy({
        left: citycontainerRef.current.clientWidth / 6,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="cities-display-container d-flex">
      {cityScrollable.left && (
        <button class="cities-display-left" onClick={handleScrollLeft}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-rtl-flip="true"><path d="M15.087 19.236a.9.9 0 0 1-.642-.266l-6.057-6.057A1.3 1.3 0 0 1 8 11.968c-.008-.35.123-.69.364-.945l6.057-6.057a.91.91 0 0 1 1.284 0 .895.895 0 0 1 0 1.284l-5.694 5.718 5.718 5.718a.896.896 0 0 1 0 1.284.88.88 0 0 1-.642.266"></path></svg>
        </button>
      )}
      <div className="cities-holder container d-flex" ref={citycontainerRef}>

        {cities.map(({ cityimg, cityname, km }, index) => (
          <div className="select-city" key={index}>
            <img className="city-image" src={cityimg} alt={cityname} />
            <p className='cityname'>{cityname}</p>
            <p className='km'>{km}</p>
          </div>
        ))}

      </div>
      {cityScrollable.right && (
        <button class="cities-display-right" onClick={handleScrollRight}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-rtl-flip="true"><path d="M8.913 19.236a.9.9 0 0 0 .642-.266l6.057-6.057a1.3 1.3 0 0 0 .388-.945c.008-.35-.123-.69-.364-.945L9.58 4.966a.91.91 0 0 0-1.284 0 .896.896 0 0 0 0 1.284l5.694 5.718-5.718 5.718a.896.896 0 0 0 0 1.284.88.88 0 0 0 .642.266"></path></svg>
        </button>
      )}
    </div>
  );
};

const Home = () => {
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null, count: '' });

  const formatDate = (date) => {
    if (!date) return 'Check-in date';
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
    const day = date.toLocaleDateString('en-US', { day: '2-digit' });
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    return `${dayOfWeek} ${day} ${month}`;
  };

  return (
    <div class="parent-home">
      <div class="calender-holder">
        <div class="container heading-holder">
          <h1>Find your next stay</h1>
          <h3>Search low prices on hotels, homes and much more...</h3>
        </div>
        <div class="container calender">
          <div class="box-filling-holder">
            <div class="box-filling d-flex bed-icon-div">
              <div class="box-filling-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#595959" d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25m0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18m22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0m-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0m-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25m0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75z"></path></svg>
              </div>
              <input class="box-filling-input" placeholder='Where are you going?' onClick={showList}>
              </input>
              <div class="list-box" id="list-box">

              </div>
            </div>
            <div class="box-filling d-flex show-calender calendar-icon-div" onClick={showCalenderHolder}>
              <div class="box-filling-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#595959" d="M22.5 13.5v8.25a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75zm1.5 0V5.25A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25v16.5A2.25 2.25 0 0 0 2.25 24h19.5A2.25 2.25 0 0 0 24 21.75zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5M7.5 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0M18 6V.75a.75.75 0 0 0-1.5 0V6A.75.75 0 0 0 18 6M5.095 14.03a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06m.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5m-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06m.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5m5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06m.53-1.28A1.125 1.125 0 1 0 12 15a1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5m-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06M12 18a1.125 1.125 0 1 0 0 2.25A1.125 1.125 0 0 0 12 18a.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5m5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06m.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5m-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06m.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5"></path></svg>
              </div>
              <span class="check-in-input">
                {dateRange.startDate ? formatDate(dateRange.startDate) : 'Check-in date'}
              </span>
              <span class="dash"> — </span>
              <span class="check-out-input">
                {dateRange.endDate ? formatDate(dateRange.endDate) : 'Check-out date'}
              </span>
              <span class="date-count-show">
                {(dateRange.count && dateRange.endDate) ? dateRange.count : ''}
              </span>
            </div>
            <div id="show-calender-holder" style={{ display: 'none' }}>
              <TabbedDateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
            </div>
            <div class="box-filling d-flex person-icon-div" onClick={showGuestCount}>
              <div class="box-filling-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#595959" d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0M3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0"></path></svg>
              </div>
              <span class="person-count-input">2 adults · 0 children · 1 room</span>
            </div>
            <div id="guest-count-div">
              <div class="guest-count-child">
                <div class="d-flex guest-count-child-inner-div">
                  <div>Adults</div>
                  <div class="plus-minus-btn d-flex">
                    <div class="btn-minus" id="guest-count-minus">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 12.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5"></path></svg>
                    </div>
                    <div class="btn-num" id="guest-count-num">
                      1
                    </div>
                    <div class="btn-plus" id="guest-count-plus">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 11.25h-7.5v-7.5a.75.75 0 0 0-1.5 0v7.5h-7.5a.75.75 0 0 0 0 1.5h7.5v7.5a.75.75 0 0 0 1.5 0v-7.5h7.5a.75.75 0 0 0 0-1.5"></path></svg>
                    </div>
                  </div>
                </div>
                <div class="d-flex guest-count-child-inner-div">
                  <div>Children</div>
                  <div class="plus-minus-btn d-flex">
                    <div class="btn-minus" id="children-count-minus">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 12.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5"></path></svg>
                    </div>
                    <div class="btn-num" id="children-count-num">
                      1
                    </div>
                    <div class="btn-plus" id="children-count-plus">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 11.25h-7.5v-7.5a.75.75 0 0 0-1.5 0v7.5h-7.5a.75.75 0 0 0 0 1.5h7.5v7.5a.75.75 0 0 0 1.5 0v-7.5h7.5a.75.75 0 0 0 0-1.5"></path></svg>
                    </div>
                  </div>
                </div>
                <div class="d-flex guest-count-child-inner-div">
                  <div>Rooms</div>
                  <div class="plus-minus-btn d-flex">
                    <div class="btn-minus" id="room-count-minus">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 12.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5"></path></svg>
                    </div>
                    <div class="btn-num" id="room-count-num">
                      1
                    </div>
                    <div class="btn-plus" id="room-count-plus">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 11.25h-7.5v-7.5a.75.75 0 0 0-1.5 0v7.5h-7.5a.75.75 0 0 0 0 1.5h7.5v7.5a.75.75 0 0 0 1.5 0v-7.5h7.5a.75.75 0 0 0 0-1.5"></path></svg>
                    </div>
                  </div>
                </div>
                <div class="done-btn d-flex">Done</div>
              </div>
            </div>
          </div>
          <div class="search-btn d-flex">
            Search
          </div>
        </div>
      </div>
      <div className="custom-checkbox-container container">
        <input
          type="checkbox"
          id="custom-checkbox"
          className="custom-checkbox"
        />
        <label htmlFor="custom-checkbox" className="custom-checkbox-label"></label>
        I’m looking for flights
      </div>
      <div class="container offer-container">
        <h3>Offers</h3>
        <p>Promotions, deals and special offers for you</p>
        <div class="offers-card-container">
          <div class="card1">
            <div class="left-div">
              <h4>Fly away to your dream holiday</h4>
              <p>Get inspired, compare and book flights with more flexibility</p>
              <div class="left-div-btn">Search for flights</div>
            </div>
            <div class="right-div">
            </div>
          </div>
          <div class="card2">
            <h4>Seize the moment</h4>
            <p>Save 15% or more when you book and stay before 1 October 2024</p>
            <div class="left-div-btn">Find Gateway Deals</div>
          </div>
        </div>
      </div>
      <div class="container trip-planner">
        <h4>Quick and easy trip planner</h4>
        <p>Pick a vibe and explore the top destinations in India</p>
        <div class="trip-planner-icons-holder d-flex">
          <div class="trip-planner-button trip-planner-active">
            <div class="trip-planner-button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m.153 22.237.85 1.117c.634.76 1.724.856 2.456.244q.117-.099.216-.217l.944-1.132a.228.228 0 0 1 .349.001l.944 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.95 1.132a1.728 1.728 0 0 0 2.65 0l.942-1.133a.228.228 0 0 1 .349.001l.942 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.94 1.13a1.728 1.728 0 0 0 2.652.001l.585-.7a.75.75 0 1 0-1.15-.962l-.585.7a.228.228 0 0 1-.35 0l-.94-1.13a1.728 1.728 0 0 0-2.652-.001l-.944 1.132a.228.228 0 0 1-.349-.001l-.942-1.13a1.728 1.728 0 0 0-2.651-.001l-.943 1.132a.228.228 0 0 1-.348-.001l-.95-1.132a1.726 1.726 0 0 0-2.65 0l-.944 1.133a.228.228 0 0 1-.349-.001l-.944-1.13a1.728 1.728 0 0 0-2.65 0l-.945 1.13a.228.228 0 0 1-.349-.001l-.828-1.09a.75.75 0 1 0-1.194.91zm11.335-2.68A7.16 7.16 0 0 1 15.77 18h7.481a.75.75 0 0 0 0-1.5h-7.5a8.67 8.67 0 0 0-5.196 1.884.75.75 0 1 0 .934 1.174zM22.285 7.969a1.73 1.73 0 0 0 .781-2.711C19.43.713 12.8-.022 8.256 3.614a10.54 10.54 0 0 0-3.952 8.171A1.73 1.73 0 0 0 6.6 13.427l15.684-5.459zm-.494-1.416L6.107 12.01a.23.23 0 0 1-.304-.218 9.036 9.036 0 0 1 16.09-5.599.228.228 0 0 1-.102.359zm-9.459-4.2L11.69.504a.75.75 0 1 0-1.416.492l.643 1.848a.75.75 0 1 0 1.416-.492zm1.156 7.883 2.527 7.262a.75.75 0 1 0 1.416-.494l-2.527-7.26a.75.75 0 1 0-1.416.492"></path></svg>            </div>
            <div class="trip-planner-button-word">Beach</div>
          </div>
          <div class="trip-planner-button">
            <div class="trip-planner-button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.5 3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0m-10.5 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0m1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0m13.5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0m1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0m-12 .75a.75.75 0 0 1-.75-.75 6.73 6.73 0 0 0-3.642-5.994.75.75 0 0 1-.167-1.207l4.043-3.842a.75.75 0 0 1 1.187.208c.062.116.143.252.263.429.197.289.429.577.697.848.8.809 1.758 1.308 2.869 1.308a.75.75 0 0 1 0 1.5 5.56 5.56 0 0 1-4.137-1.966.75.75 0 0 0-1.089-.058l-1.452 1.38a.75.75 0 0 0 .031 1.116 8.22 8.22 0 0 1 2.897 6.277.75.75 0 0 1-.75.751m0 1.5a2.25 2.25 0 0 0 2.25-2.25 9.72 9.72 0 0 0-3.425-7.421l.03 1.114 1.453-1.38-1.089-.059a7.07 7.07 0 0 0 5.268 2.496A2.25 2.25 0 1 0 16.5 9c-.656 0-1.26-.315-1.803-.863a4.6 4.6 0 0 1-.695-.914 2.25 2.25 0 0 0-3.552-.604l-4.043 3.842a2.25 2.25 0 0 0 .51 3.626 5.24 5.24 0 0 1 2.833 4.662A2.25 2.25 0 0 0 12 21"></path></svg>            </div>
            <div class="trip-planner-button-word">Outdoors</div>
          </div>
          <div class="trip-planner-button">
            <div class="trip-planner-button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="m12.541 21.325-9.588-10a4.923 4.923 0 1 1 6.95-6.976l1.567 1.566a.75.75 0 0 0 1.06 0l1.566-1.566a4.923 4.923 0 0 1 6.963 6.962l-9.6 10.014zm-1.082 1.038a.75.75 0 0 0 1.082 0l9.59-10.003a6.42 6.42 0 0 0-.012-9.07 6.423 6.423 0 0 0-9.083-.001L11.47 4.854h1.06l-1.566-1.566a6.423 6.423 0 1 0-9.082 9.086l9.577 9.99z"></path></svg>            </div>
            <div class="trip-planner-button-word">Romance</div>
          </div>
          <div class="trip-planner-button">
            <div class="trip-planner-button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M2.75 6h9.5a.25.25 0 0 1-.25-.25v17.5l.75-.75H2.25l.75.75V5.75a.25.25 0 0 1-.25.25m0-1.5c-.69 0-1.25.56-1.25 1.25v17.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V5.75c0-.69-.56-1.25-1.25-1.25zm3-1.5h3.5A.25.25 0 0 1 9 2.75v2.5l.75-.75h-4.5l.75.75v-2.5a.25.25 0 0 1-.25.25m0-1.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-2.5c0-.69-.56-1.25-1.25-1.25zM5.25 9h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5m0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5m0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5m0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5m0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5M7.5.75v1.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0M15.75 24h6a.75.75 0 0 0 .75-.75V10.5A1.5 1.5 0 0 0 21 9h-4.5a1.5 1.5 0 0 0-1.5 1.5v12.75a.75.75 0 0 0 1.5 0V10.5H21v12.75l.75-.75h-6a.75.75 0 0 0 0 1.5M19.5 8.25v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0M.75 24h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5"></path></svg>            </div>
            <div class="trip-planner-button-word">City</div>
          </div>
        </div>
        <div className='trip-planner-cities'>
          <CitiesDisplay />
        </div>
      </div>
    </div>
  );
};

export default Home;
