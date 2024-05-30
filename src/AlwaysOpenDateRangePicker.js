import React, { useState, useEffect } from 'react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const AlwaysOpenDateRangePicker = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true); // Open the calendar when the component mounts
  }, []);

  return (
    <DateRangePicker
      value={value}
      onChange={onChange}
      placeholder="Select Date Range"
      className="date-range-picker"
      style={{ width: 500 }}
      open={open}
      format="MMM dd, yyyy"
      showHeader={false}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)} // Keep it open
    />
  );
};

export default AlwaysOpenDateRangePicker;
