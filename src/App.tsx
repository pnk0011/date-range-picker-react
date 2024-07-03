import React, { useState, useEffect } from "react";
import "./App.css";
import DatePicker from "./components/DatePicker";
const weekends: Date[] = [];
export default function App() {
  const [form, formSet] = useState({
    end: "end",
    start: "start",
    destination: "",
  });
  const [open, openSet] = useState(false);
  const [startDate, startDateSet] = useState<Date | undefined>(undefined);
  const [endDate, endDateSet] = useState<Date | undefined>(undefined);
  //console.log("main", startDate, endDate);
  useEffect(() => {
    function calculateWeekends(startDate: Date, endDate: Date) {
      // Make a copy of the start date to avoid mutating the original date
      let currentDate = new Date(startDate);

      // Loop through each date in the range
      while (currentDate <= endDate) {
        // Check if the current date is a weekend (Saturday or Sunday)
        const day = currentDate.getDay();
        if (day === 6 || day === 0) {
          // If it's a weekend, add it to the weekends array
          weekends.push(new Date(currentDate));
        }

        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
      }
      console.log("range", startDate, endDate);
      console.log("weekends", weekends);
    }
    if (startDate && endDate) calculateWeekends(startDate, endDate);
  }, [startDate, endDate]);

  // function handleSubmit() {
  //   console.log(form);
  // }

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   formSet({ ...form, [e.target.name]: e.target.value });
  // }

  function handleCalenderClicks(
    e: React.MouseEvent<HTMLDivElement>,
    value: string
  ) {
    let elm = e.target as HTMLDivElement;
    if (!(startDate && !endDate)) {
      startDateSet(new Date(value));
      formSet({ ...form, start: value as string, end: "end" });
      endDateSet(undefined);
      resetDivs();
      elm.style.color = "green";
      elm.style.backgroundColor = "lightblue";
    } else if (new Date(value) >= startDate) {
      endDateSet(new Date(value));
      formSet({ ...form, end: value as string });
      elm.style.color = "red";
      elm.style.backgroundColor = "lightblue";
    } else {
      startDateSet(new Date(value));
      formSet({ ...form, start: value as string });
      resetDivs();
      elm.style.color = "green";
      elm.style.backgroundColor = "lightblue";
    }
  }

  function resetDivs() {
    let container = document.querySelectorAll("p");
    container.forEach((div) => {
      let box = div as HTMLParagraphElement;
      if (box.style.color === "red" || "green") {
        box.style.color = "inherit";
        box.style.fontWeight = "inherit";
        box.style.backgroundColor = "inherit";
      }
    });
  }

  const getWeekends = (): any => {
    let start = startDate?.toDateString();
    let endDates = endDate?.toDateString();
    return (
      <div className="flex align-items">
        <h2 className="margin-right">Selected Date Range : </h2>{" "}
        <h4>{start}</h4>
        {" -- "}
        <h4>{endDates}</h4>
      </div>
    );
  };

  return (
    <div className="main-container">
      <div>
        <DatePicker
          handleClick={handleCalenderClicks}
          startDate={startDate}
          endDate={endDate}
        />
      </div>

      {/* <div className="range-display">
        {startDate && endDate && getWeekends()}
      </div> */}
      <div className="weekends-display flex">
        {weekends.length
          ? weekends.map((date) => {
              return (
                <div>
                  <div className="selected-weekends">
                    {date?.toDateString()}
                    {","}
                  </div>
                </div>
              );
            })
          : "Hello"}
      </div>
    </div>
  );
}
