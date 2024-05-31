import React, { useState, useEffect } from 'react';
import './DateRangePicker.css'; // You'll need to style the component using CSS

const DateRangePicker = ({ dateRange, setDateRange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    if (startDate || endDate) {
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
          {monthOffset === 0 && <div className='calendar-header-button'>
            <div onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-rtl-flip="true"><path d="M15.087 19.236a.9.9 0 0 1-.642-.266l-6.057-6.057A1.3 1.3 0 0 1 8 11.968c-.008-.35.123-.69.364-.945l6.057-6.057a.91.91 0 0 1 1.284 0 .895.895 0 0 1 0 1.284l-5.694 5.718 5.718 5.718a.896.896 0 0 1 0 1.284.88.88 0 0 1-.642.266"></path></svg>
            </div>
          </div>}
          <span className='calendar-header-span'>{currentMonth.toLocaleDateString('default', { month: 'long', year: 'numeric' })}</span>
          {monthOffset === 1 && <div className='calendar-header-button'>
            <div onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-rtl-flip="true"><path d="M8.913 19.236a.9.9 0 0 0 .642-.266l6.057-6.057a1.3 1.3 0 0 0 .388-.945c.008-.35-.123-.69-.364-.945L9.58 4.966a.91.91 0 0 0-1.284 0 .896.896 0 0 0 0 1.284l5.694 5.718-5.718 5.718a.896.896 0 0 0 0 1.284.88.88 0 0 0 .642.266"></path></svg>
            </div>
          </div>}
        </div>
        <div className="calendar-body">
          <div className="calendar-weekdays">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
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
      <div className="box-filling d-flex show-calender-date-range" id="show-calender">
        <div className="box-filling-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>
        </div>
        <span className="check-in-input">
          <input
            type="date"
            value={startDate ? startDate.toISOString().substring(0, 10) : ''}
            onChange={handleStartDateChange}
          />
        </span>
        <span className="dash"> — </span>
        <span className="check-out-input">
          <input
            type="date"
            value={endDate ? endDate.toISOString().substring(0, 10) : ''}
            onChange={handleEndDateChange}
          />
        </span>
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
