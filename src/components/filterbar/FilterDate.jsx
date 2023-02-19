import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function FilterDate({ date, setDate }) {
  return (
    <DatePicker selected={date} 
                onChange={date => setDate(date)}
                dateFormat="yyyy/MM/dd"
                placeholderText="Select Move-in Date"
                minDate={new Date()}
                showYearDropdown
                scrollableMonthYearDropdown
     />
  );
}
