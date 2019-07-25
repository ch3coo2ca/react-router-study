import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import moment from "moment";

export class DatePicker extends React.Component {
  render() {
    return (
      <div>
        Select a date... <br />
        <DayPickerInput
          onDayChange={day => console.log(moment(day).format("YYYY-MM-DD"))}
        />
      </div>
    );
  }
}
