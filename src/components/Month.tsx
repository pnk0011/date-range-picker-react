import { IMonthProps } from "../types/index";
import Row from "./Row";
import { useState } from "react";
export default function Month(props: IMonthProps) {
  const [selecrYear, setSelecrYear] = useState(false);
  const firstDateOfMonth = new Date(props.year, props.month - 1, 1);
  //console.log("firstDateOfMonth", firstDateOfMonth, props.year, props.month, 1);
  const numOfDays = new Date(props.year, props.month, 0).getDate();
  const dayOfWeek = firstDateOfMonth.getDay();
  const monthName = firstDateOfMonth.toLocaleString("default", {
    month: "long",
  });
  const numberOfRows = getNumberOfRows(numOfDays, dayOfWeek);

  const getYears = () => {
    let yearsList = new Array(130).fill(null);
    const handleDateSelection = (year: number, month: number) => {
      //console.log("radian", year, month);
      props.setYear({
        month: month,
        year: year,
      });
      //  props.setLeftMonth(month);
      setSelecrYear(false);
    };

    for (let i = 1970; i < 2100; i++) {
      yearsList.push(
        <div className="year-row">
          <div>{i}</div>
          <div>
            <div className="flex">
              <div
                onClick={() => handleDateSelection(i, 1)}
                className="month-box"
              >
                1
              </div>
              <div
                onClick={() => handleDateSelection(i, 2)}
                className="month-box"
              >
                2
              </div>
              <div
                onClick={() => handleDateSelection(i, 3)}
                className="month-box"
              >
                3
              </div>
              <div
                onClick={() => handleDateSelection(i, 4)}
                className="month-box"
              >
                4
              </div>
              <div
                onClick={() => handleDateSelection(i, 5)}
                className="month-box"
              >
                5
              </div>
              <div
                onClick={() => handleDateSelection(i, 6)}
                className="month-box"
              >
                6
              </div>
            </div>
            <div className="flex">
              <div
                onClick={() => handleDateSelection(i, 7)}
                className="month-box"
              >
                7
              </div>
              <div
                onClick={() => handleDateSelection(i, 8)}
                className="month-box"
              >
                8
              </div>
              <div
                onClick={() => handleDateSelection(i, 9)}
                className="month-box"
              >
                9
              </div>
              <div
                onClick={() => handleDateSelection(i, 10)}
                className="month-box"
              >
                10
              </div>
              <div
                onClick={() => handleDateSelection(i, 11)}
                className="month-box"
              >
                11
              </div>
              <div
                onClick={() => handleDateSelection(i, 12)}
                className="month-box"
              >
                12
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        {/* <h4 className="text-align-center">
          {leftMonth} {leftYear}
        </h4> */}
        <div className="year-list-container">{yearsList}</div>
      </div>
    );
  };

  const handleYearChange = () => {
    setSelecrYear((prev) => !prev);
  };

  return (
    <>
      <h4 className="month pointer">
        <span onClick={() => props.setLeftCalendar(-1)} className="pointer">
          {"<"}
        </span>{" "}
        <span onClick={handleYearChange}>
          {" "}
          {monthName} {props.year}{" "}
        </span>
        <span onClick={() => props.setLeftCalendar(1)} className="pointer">
          {">"}
        </span>
      </h4>
      {selecrYear ? (
        <div>{getYears()}</div>
      ) : (
        <>
          <div className="days">Sun Mon Tue Wed Thu Fri Sat</div>
          <div className="calendar">
            <Row
              month={props.month}
              year={props.year}
              handleClick={props.handleClick}
              dayOfWeek={dayOfWeek}
              numberOfDaysInMonth={numOfDays}
              rowNumber={0}
              startDate={props.startDate}
              endDate={props.endDate}
            />
            <Row
              month={props.month}
              year={props.year}
              handleClick={props.handleClick}
              dayOfWeek={dayOfWeek}
              numberOfDaysInMonth={numOfDays}
              rowNumber={1}
              startDate={props.startDate}
              endDate={props.endDate}
            />
            <Row
              month={props.month}
              year={props.year}
              handleClick={props.handleClick}
              dayOfWeek={dayOfWeek}
              numberOfDaysInMonth={numOfDays}
              rowNumber={2}
              startDate={props.startDate}
              endDate={props.endDate}
            />
            <Row
              month={props.month}
              year={props.year}
              handleClick={props.handleClick}
              dayOfWeek={dayOfWeek}
              numberOfDaysInMonth={numOfDays}
              rowNumber={3}
              startDate={props.startDate}
              endDate={props.endDate}
            />
            {numberOfRows >= 5 && (
              <Row
                month={props.month}
                year={props.year}
                handleClick={props.handleClick}
                dayOfWeek={dayOfWeek}
                numberOfDaysInMonth={numOfDays}
                rowNumber={4}
                startDate={props.startDate}
                endDate={props.endDate}
              />
            )}
            {numberOfRows === 6 && (
              <Row
                month={props.month}
                year={props.year}
                handleClick={props.handleClick}
                dayOfWeek={dayOfWeek}
                numberOfDaysInMonth={numOfDays}
                rowNumber={5}
                startDate={props.startDate}
                endDate={props.endDate}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}

//Helpers
export const getNumberOfRows = (
  numberOfDaysInMonth: number,
  dayOfTheWeek: number
) => {
  switch (numberOfDaysInMonth - (21 + (7 - dayOfTheWeek))) {
    case 0:
      return 4;
    case 8:
    case 9:
      return 6;
    default:
      return 5;
  }
};
