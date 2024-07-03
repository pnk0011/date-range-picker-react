export type BoxProps = {
  value: number | string;
  handleClick: (e: React.MouseEvent<HTMLDivElement>, value: string) => void;
  month: number;
  year: number;
  index: number;
  startDate: Date | undefined;
  endDate: Date | undefined;
};

export type DatePickerProps = {
  handleClick: (e: React.MouseEvent<HTMLDivElement>, value: string) => void;
  startDate: Date | undefined;
  endDate: Date | undefined;
};

export type IRowProps = {
  dayOfWeek: number;
  numberOfDaysInMonth: number;
  rowNumber: number;
  month: number;
  year: number;
  handleClick: (e: React.MouseEvent<HTMLDivElement>, value: string) => void;
  startDate: Date | undefined;
  endDate: Date | undefined;
};

export type IMonthProps = {
  month: number;
  year: number;
  handleClick: (e: React.MouseEvent<HTMLDivElement>, value: string) => void;
  startDate: Date | undefined;
  endDate: Date | undefined;
  setLeftCalendar: any;
  setYear: any;
};
