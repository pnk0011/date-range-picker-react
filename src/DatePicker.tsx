import React from "react"
import './DatePicker.css';

interface DatePickerProps {

}

const DatePicker = (props: DatePickerProps) => {
    let monthsArray = new Array();

    return (
        <>
            <div className='content'>
                <div className="calendar">
                   <Month/>
                </div>
            </div>
        </>
    )
};

export default DatePicker;

interface BoxProps {
    value: number | string
}

function Box(props: BoxProps) {

    return (
        <p>
            {props.value}
        </p>
    );
}



interface IRowProps {
    startIndex: number
    endIndex: number
}

function Row(props: IRowProps) {
    const dates: number[] = [];
    for (let i = 1; i < 32; i++) {
        dates.push(i);
    }
    return (
        <>
            <div className="row">
                {
                    dates.slice(props.startIndex, props.endIndex).map((d) =>
                        <Box value={d} />

                    )
                }
            </div>
        </>
    )
}
interface IMonthProps {
    // month: number
    // year: string
    // handleCalendarClicks: (e: React.MouseEvent<HTMLDivElement>) => void;
    // strikethroughDays: boolean
}

function Month(props: IMonthProps) {
    // const firstDayOfCurrentMonth = dayjs(`${props.year}-${props.month}-01`)
    // const dayOfWeek: number = dayjs(firstDayOfCurrentMonth).day()
    // const monthTitle = calendarHelper.getNextMonth(props.month)
    // const numberOfDaysInMonth = calendarHelper.getNumberOfDaysInMonth(props.month, props.year)
    // const numberOfRows = calendarHelper.getNumberOfRows(props.month, numberOfDaysInMonth, dayOfWeek)

    return (
        <>
            <h4 className='month'>February 2026</h4>
            <div className='days'>Sun Mon Tue Wed Thu Fri Sat</div>
            <div className='calendar'>
                <Row startIndex={0} endIndex={7}/>
                <Row startIndex={7} endIndex={14}/>
                <Row startIndex={14} endIndex={21}/>
                <Row startIndex={21} endIndex={28}/>
                {/* {(numberOfRows >= 5) && <Row>}
                {(numberOfRows == 6) && <Row>} */}
            </div>
        </>
    )
}
