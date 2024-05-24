import React, { useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
import './DatePickerCustom.css'; // Import the custom CSS

const DatePicker = () => {
  useEffect(() => {
    $('#datepicker').datepicker({
      format: 'yyyy-mm-dd',
      todayHighlight: true,
      autoclose: true,
      orientation: 'bottom auto', // Auto orientation to fit within viewport
      templates: {
        leftArrow: '<i class="fa fa-chevron-left"></i>',
        rightArrow: '<i class="fa fa-chevron-right"></i>'
      }
    });
  }, []);

  return (
    <div className="input-group date" id="datepicker">
      <input type="text" className="form-control" placeholder="Select Date" />
      <div className="input-group-append">
        <span className="input-group-text">
          <i className="fa fa-calendar"></i>
        </span>
      </div>
    </div>
  );
};

export default DatePicker;
