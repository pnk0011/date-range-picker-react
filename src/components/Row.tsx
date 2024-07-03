import { IRowProps } from "../types/index";
import Box from "./Box";

export default function Row(props: IRowProps) {
  const dates = getOneMonthArray(props.dayOfWeek, props.numberOfDaysInMonth);
  let rowNumber = 0;
  rowNumber += props.rowNumber;
  let startIndex: number = rowNumber * 7;
  let endIndex = startIndex + 7;

  return (
    <>
      <div className="row">
        {dates.slice(startIndex, endIndex).map((d, index) => (
          <Box
            month={props.month}
            year={props.year}
            handleClick={props.handleClick}
            value={d}
            index={index}
            startDate={props.startDate}
            endDate={props.endDate}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

export const getOneMonthArray = (
  dayOfWeek: number,
  numberOfDaysInMonth: number
) => {
  let dates = new Array<number | string>(42);
  // assign first day to array index equal to day of week of first day
  dates[dayOfWeek] = 1;
  // fill in indexes from 1 through numberOfDaysInCurrentMonth
  let nextDay = 2;
  for (
    let i = dayOfWeek + 1;
    i < dayOfWeek + numberOfDaysInMonth;
    i++, nextDay++
  ) {
    dates[i] = nextDay;
  }
  // assign or leave empty indexes between 0 and first day
  // assign value or leave empty indexes between last day of month and end of that row
  for (let i = 0; i < dates.length; i++) {
    if (dates[i] === undefined) {
      dates[i] = "";
    }
  }
  return dates;
};
