import React, { useState, useEffect } from 'react';
import './DateRangePicker.css'; // You'll need to style the component using CSS

const DateRangePicker = ({ dateRange, setDateRange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

 useEffect(() => {
    if (startDate && endDate) {
      setDateRange({ startDate, endDate });
    }
  }, [startDate, endDate, setDateRange]);

  const handleStartDateChange = (event) => {
    setStartDate(new Date(event.target.value));
  };

  const handleEndDateChange = (event) => {
    setEndDate(new Date(event.target.value));
  };

  const handleDateClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    }
  };

  const renderCalendar = (monthOffset = 0) => {
    const currentMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + monthOffset, 1);
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
    }

    return (
      <div className="calendar">
        <div className="calendar-header">
          {monthOffset === 0 && <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}>Prev</button>}
          <span>{currentMonth.toLocaleDateString('default', { month: 'long', year: 'numeric' })}</span>
          {monthOffset === 1 && <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}>Next</button>}
        </div>
        <div className="calendar-body">
          <div className="calendar-weekdays">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="calendar-weekday">{day}</div>
            ))}
          </div>
          <div className="calendar-days">
            {[...Array(firstDayOfMonth)].map((_, i) => (
              <div key={`empty-${i}`} className="calendar-day empty"></div>
            ))}
            {days.map(day => (
              <div
                key={day}
                className={`calendar-day ${startDate && endDate && day >= startDate && day <= endDate ? 'selected' : ''}`}
                onClick={() => handleDateClick(day)}
              >
                {day.getDate()}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="box-filling d-flex show-calender" id="show-calender">
        <div className="box-filling-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>
        </div>
        <span className="check-in-input"><input
          type="date"
          value={startDate ? startDate.toISOString().substring(0, 10) : ''}
          onChange={handleStartDateChange}
        /></span>
        <span className="dash"> — </span>
        <span className="check-out-input"><input
          type="date"
          value={endDate ? endDate.toISOString().substring(0, 10) : ''}
          onChange={handleEndDateChange}
        /></span>
      </div>
      <div id="show-calender-holder" style={{ display: 'block' }}>
        <div className="calendar-container">
          {renderCalendar(0)}
          {renderCalendar(1)}
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
