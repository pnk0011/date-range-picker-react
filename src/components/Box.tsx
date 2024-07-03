import { BoxProps } from "../types/index";

export default function Box(props: BoxProps) {
  let isSelected = false;
  if (props.startDate && props.endDate) {
    isSelected =
      props.startDate <=
        new Date(props.year + "-" + props.month + "-" + props.value) &&
      props.endDate >=
        new Date(props.year + "-" + props.month + "-" + props.value) &&
      props.index !== 0 &&
      props.index !== 6;

    //console.log("isSelected", isSelected);
  }
  return (
    <div className={isSelected && props.value ? "selected-box" : ""}>
      <p
        onClick={(e) =>
          props.handleClick(
            e,
            props.year + "-" + props.month + "-" + props.value
          )
        }
        className={
          props.index === 0 || props.index === 6
            ? "disable-date-click"
            : "box-element"
        }
      >
        {props.value}
      </p>
    </div>
  );
}
