import React, { useState } from "react";
import { DatePickerProps } from "../types/index";
import Month from "./Month";

const today = new Date();

const DatePicker = (props: DatePickerProps) => {
  //const [leftCalendar.month, setLeftMonth] = useState(today.getMonth() + 1);
  const [leftCalendar, setLeftCalendar] = useState({
    month: today.getMonth() + 1,
    year: today.getFullYear(),
  });
  const [rightCalendar, setRightCalendar] = useState({
    month: today.getMonth() + 2,
    year: today.getFullYear(),
  });

  //const [leftCalendar.year, setLeftYear] = useState(today.getFullYear());
  //const [rightCalendar.month, setRightMount] = useState(today.getMonth() + 2);
  //const [rightCalendar.year, setRightYear] = useState(today.getFullYear());

  const [showCalendar, setShowCalendar] = useState(false);
  // let monthsArray = [];
  // let month = today.getMonth() + 1;
  // let year = today.getFullYear();

  // for (let i = 0; i < 48; i++) {
  //   monthsArray.push(
  //     <Month
  //       handleClick={props.handleClick}
  //       month={month}
  //       year={leftCalendar.year}
  //       startDate={props.startDate}
  //       endDate={props.endDate}
  //     />
  //   );
  //   if (month % 12 === 0) {
  //     year++;
  //   }
  //   month++;
  // }

  const handlLeftMonthChange = (val: number) => {
    if (
      leftCalendar.month + val + leftCalendar.year >=
      rightCalendar.month + rightCalendar.year
    ) {
      setRightCalendar({
        month: leftCalendar.month + val + 1,
        year: leftCalendar.year,
      });
      //setRightMount((prev) => leftCalendar.month + val + 1);
      // setRightYear((prev) => leftCalendar.year);
    }
    if (leftCalendar.month + val > 12) {
      setLeftCalendar((prev) => ({
        month: 1,
        year: prev.year + 1,
      }));
      // setLeftMonth((prev) => 1);
      // setLeftYear((prev) => prev + 1);
    } else if (leftCalendar.month + val < 1) {
      setLeftCalendar((prev) => ({
        month: 12,
        year: prev.year - 1,
      }));
      // setLeftMonth((prev) => 12);
      // setLeftYear((prev) => prev - 1);
    } else {
      setLeftCalendar((prev) => ({
        month: prev.month + val,
        year: prev.year,
      }));
      // setLeftMonth((prev) => prev + val);
    }
  };

  const handleRighttMonthChange = (val: number) => {
    console.log(
      "radian ",
      leftCalendar.month,
      leftCalendar.year,
      rightCalendar.month,
      rightCalendar.year,
      val
    );
    if (
      leftCalendar.month + leftCalendar.year >=
        rightCalendar.month + val + rightCalendar.year &&
      leftCalendar.year >= rightCalendar.year
    ) {
      if (rightCalendar.month + val - 1 === 0) {
        setLeftCalendar((prev) => ({
          month: 12,
          year: prev.year - 1,
        }));
        // setLeftMonth((prev) => 12);
        // setLeftYear((prev) => prev - 1);
      } else {
        setLeftCalendar((prev) => ({
          month: prev.month - 1,
          year: prev.year,
        }));
        //setLeftMonth((prev) => prev - 1);
      }
    }

    if (rightCalendar.month + val > 12) {
      setRightCalendar((prev) => ({
        month: 1,
        year: prev.year + 1,
      }));
      //setRightMount((prev) => 1);
      // setRightYear((prev) => prev + 1);
    } else if (rightCalendar.month + val < 1) {
      setRightCalendar((prev) => ({
        month: 12,
        year: prev.year - 1,
      }));
      //setRightMount((prev) => 12);
      // setRightYear((prev) => prev - 1);
    } else {
      setRightCalendar((prev) => ({
        month: prev.month + val,
        year: prev.year,
      }));
      //setRightMount((prev) => prev + val);
    }
  };

  // const getYears = () => {
  //   let yearsList = new Array(130).fill(null);
  //   const handleDateSelection = (year: number, month: number) => {
  //     setLeftYear(year);
  //     setLeftMonth(month);
  //     setSelecrYear(false);
  //   };

  //   for (let i = 1970; i < 2100; i++) {
  //     yearsList.push(
  //       <div className="year-row">
  //         <div>{i}</div>
  //         <div>
  //           <div className="flex">
  //             <div
  //               onClick={() => handleDateSelection(i, 1)}
  //               className="month-box"
  //             >
  //               1
  //             </div>
  //             <div
  //               onClick={() => handleDateSelection(i, 2)}
  //               className="month-box"
  //             >
  //               2
  //             </div>
  //             <div
  //               onClick={() => handleDateSelection(i, 3)}
  //               className="month-box"
  //             >
  //               3
  //             </div>
  //             <div
  //               onClick={() => handleDateSelection(i, 4)}
  //               className="month-box"
  //             >
  //               4
  //             </div>
  //             <div
  //               onClick={() => handleDateSelection(i, 5)}
  //               className="month-box"
  //             >
  //               5
  //             </div>
  //             <div
  //               onClick={() => handleDateSelection(i, 6)}
  //               className="month-box"
  //             >
  //               6
  //             </div>
  //           </div>
  //           <div className="flex">
  //             <div
  //               onClick={() => handleDateSelection(i, 7)}
  //               className="month-box"
  //             >
  //               7
  //             </div>
  //             <div
  //               onClick={() => handleDateSelection(i, 8)}
  //               className="month-box"
  //             >
  //               8
  //             </div>
  //             <div
  //               onClick={() => handleDateSelection(i, 9)}
  //               className="month-box"
  //             >
  //               9
  //             </div>
  //             <div
  //               onClick={() => handleDateSelection(i, 10)}
  //               className="month-box"
  //             >
  //               10
  //             </div>
  //             <div
  //               onClick={() => handleDateSelection(i, 11)}
  //               className="month-box"
  //             >
  //               11
  //             </div>
  //             <div
  //               onClick={() => handleDateSelection(i, 12)}
  //               className="month-box"
  //             >
  //               12
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }

  //   return (
  //     <div>
  //       <h4 className="text-align-center">
  //         {leftCalendar.month} {leftCalendar.year}
  //       </h4>
  //       <div className="year-list-container">{yearsList}</div>
  //     </div>
  //   );
  // };

  return (
    <>
      <div>
        <input
          type="text"
          className="date-picker-input"
          placeholder="Select Date Range"
          readOnly
          onClick={() => setShowCalendar((prev) => !prev)}
        />
      </div>

      <div className={showCalendar ? "content" : "content hidden"}>
        <div style={{ border: "1px solid black" }} className="calendar">
          <Month
            handleClick={props.handleClick}
            month={leftCalendar.month}
            year={leftCalendar.year}
            startDate={props.startDate}
            endDate={props.endDate}
            setLeftCalendar={handlLeftMonthChange}
            setYear={setLeftCalendar}
            // setLeftYear={setLeftYear}
          />
        </div>
        <div style={{ border: "1px solid black" }} className="calendar">
          <Month
            handleClick={props.handleClick}
            month={rightCalendar.month}
            year={rightCalendar.year}
            startDate={props.startDate}
            endDate={props.endDate}
            setLeftCalendar={handleRighttMonthChange}
            setYear={setRightCalendar}
            // setLeftYear={setRightYear}
          />
        </div>
      </div>
    </>
  );
};

export default DatePicker;
