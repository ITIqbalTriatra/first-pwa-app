import { styled } from "styled-components";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";

const Success = () => {
  const { name, date } = useAppSelector((state) => state.messageReducer.user);
  if (name === "") {
    return <Navigate to="/" />;
  }
  return (
    <div className="h-screen p-4 flex items-center justify-center text-center">
      Your name {name.toUpperCase()} date {date} has been success
    </div>
  );
};

export default Success;
