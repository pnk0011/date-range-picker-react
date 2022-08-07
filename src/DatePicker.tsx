import React from "react"
import { isPropertySignature } from "typescript";
import './DatePicker.css';

const today = new Date()
type DatePickerProps = {
    handleClick: (e: React.MouseEvent<HTMLDivElement>, value: string) => void
}

const DatePicker = (props: DatePickerProps) => {
    let monthsArray = new Array();
    let month = today.getMonth() + 1
    let year = today.getFullYear()

    for (let i = 0; i < 24; i++) {
        monthsArray.push(<Month handleClick={props.handleClick} month={month} year={year} />)
        year = month == 12 ? year + 1 : year
        month++
    }

    return (
        <>
            <div className='content'>
                <div className="calendar" >
                    {monthsArray}
                </div>
            </div>
        </>
    )
};

export default DatePicker;

type BoxProps = {
    value: number | string
    handleClick: (e: React.MouseEvent<HTMLDivElement>, value: string) => void
    month: number
    year: number
}

function Box(props: BoxProps) {

    return (
        <p onClick={(e) => props.handleClick(e, props.year + '-' + props.month + '-' + props.value)}>
            {props.value}
        </p>
    );
}



type IRowProps = {
    dayOfWeek: number
    numberOfDaysInMonth: number
    rowNumber: number
    month: number
    year: number
    handleClick: (e: React.MouseEvent<HTMLDivElement>, value: string) => void

}

function Row(props: IRowProps) {
    const dates = getOneMonthArray(props.dayOfWeek, props.numberOfDaysInMonth)
    let rowNumber = 0;
    rowNumber += props.rowNumber;
    let startIndex: number = (rowNumber * 7);
    let endIndex = startIndex + 7;

    return (
        <>
            <div className="row">
                {
                    dates.slice(startIndex, endIndex).map((d) =>
                        <Box month={props.month} year={props.year} handleClick={props.handleClick} value={d} />

                    )
                }
            </div>
        </>
    )
}
type IMonthProps = {
    month: number
    year: number
    handleClick: (e: React.MouseEvent<HTMLDivElement>, value: string) => void
}

function Month(props: IMonthProps) {
    const firstDateOfMonth = (new Date(props.year, props.month - 1, 1))
    const numOfDays = new Date(props.year, props.month, 0).getDate();
    const dayOfWeek = firstDateOfMonth.getDay()
    const monthName = firstDateOfMonth.toLocaleString('default', { month: 'long' })
    const numberOfRows = getNumberOfRows(numOfDays, dayOfWeek)

    return (
        <>
            <h4 className='month'>{monthName} {props.year}</h4>
            <div className='days'>Sun Mon Tue Wed Thu Fri Sat</div>
            <div className='calendar'>
                <Row month={props.month} year={props.year} handleClick={props.handleClick} dayOfWeek={dayOfWeek} numberOfDaysInMonth={numOfDays} rowNumber={0} />
                <Row month={props.month} year={props.year} handleClick={props.handleClick} dayOfWeek={dayOfWeek} numberOfDaysInMonth={numOfDays} rowNumber={1} />
                <Row month={props.month} year={props.year} handleClick={props.handleClick} dayOfWeek={dayOfWeek} numberOfDaysInMonth={numOfDays} rowNumber={2} />
                <Row month={props.month} year={props.year} handleClick={props.handleClick} dayOfWeek={dayOfWeek} numberOfDaysInMonth={numOfDays} rowNumber={3} />
                {(numberOfRows >= 5) && <Row month={props.month} year={props.year} handleClick={props.handleClick} dayOfWeek={dayOfWeek} numberOfDaysInMonth={numOfDays} rowNumber={4} />}
                {(numberOfRows == 6) && <Row month={props.month} year={props.year} handleClick={props.handleClick} dayOfWeek={dayOfWeek} numberOfDaysInMonth={numOfDays} rowNumber={5} />}
            </div>
        </>
    )
}


//Helpers
export const getNumberOfRows = (numberOfDaysInMonth: number, dayOfTheWeek: number) => {

    switch (numberOfDaysInMonth - (21 + (7 - dayOfTheWeek))) {
        case 0: return 4;
        case 8: case 9: return 6;
        default: return 5;
    }
}

export const getOneMonthArray = (dayOfWeek: number, numberOfDaysInMonth: number) => {
    let dates = new Array<number | string>(42)
    // assign first day to array index equal to day of week of first day
    dates[dayOfWeek] = 1;
    // fill in indexes from 1 through numberOfDaysInCurrentMonth
    let nextDay = 2;
    for (let i = dayOfWeek + 1; i < dayOfWeek + numberOfDaysInMonth; i++, nextDay++) {
        dates[i] = nextDay;
    }
    // assign or leave empty indexes between 0 and first day
    // assign value or leave empty indexes between last day of month and end of that row
    for (let i = 0; i < dates.length; i++) {
        if (dates[i] == undefined) {
            dates[i] = '';
        }
    }
    return dates;
}
