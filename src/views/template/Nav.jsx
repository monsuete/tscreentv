import "./Nav.css";
import React, { useState } from "react";

// import Calendar from "../../components/Calender";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

function Nav() {
  const [value, onChange] = useState(new Date());
  return (
    <aside className="menu-area">
      <div className="calendar">
        <Calendar
          calendarType="US"
          oneWeekCalendar={true}
          onChange={onChange}
          value={value}
          // defaultView={"century"}
        />
      </div>
    </aside>
  );
}

export default Nav;
