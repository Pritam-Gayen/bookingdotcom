import React from 'react';
import { useState } from 'react';
import './Home.css';
// import DateRangePicker from './DateRangePicker';
import TabbedDateRangePicker from './TabbedDateRangePicker';
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
    <div>
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
            <div id="show-calender-holder">
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
    </div>
  );
};

export default Home;
