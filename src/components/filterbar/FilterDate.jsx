import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./FilterDate.css"

export default function FilterDate({ date, setDate }) {

  return (
    <DatePicker selected={date} 
                onChange={date => setDate(date)}
                dateFormat="yyyy/MM/dd"
                placeholderText="Select Move-in Date      &#128197;"
                minDate={new Date()}
                showYearDropdown
                scrollableMonthYearDropdown
                wrapperClassName='datePicker'
     />
  );
}
