import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { startCount } from "../../../redux/features/messages-slice";
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';

const DateOptions: React.FC<any> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDate: DatePickerProps['onChange'] = (date, dateString) => {
    props.actionProvider.handleUserInput(date);
    dispatch(startCount());
  };

  return (
    <DatePicker onChange={handleDate} needConfirm />
  );
};

export default DateOptions;
