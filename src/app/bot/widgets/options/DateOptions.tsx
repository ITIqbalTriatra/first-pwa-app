import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { startCount } from "../../../redux/features/messages-slice";

const DateOptions: React.FC<any> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.actionProvider.handleUserInput(parseInt(e.target.value));
    dispatch(startCount());
  };

  return (
    <input
      className="bg-gray-100 rounded p-2"
      type="date"
      placeholder="Select Date"
      onChange={handleDate}
    />
  );
};

export default DateOptions;
