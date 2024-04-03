import { styled } from "styled-components";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";

const StyledSuccess = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const Success = () => {
  const { name, age } = useAppSelector((state) => state.messageReducer.user);
  if (name === "") {
    return <Navigate to="/" />;
  }
  return (
    <StyledSuccess>
      Your name {name.toUpperCase()} aged {age} has been added to student
      system. You may now exit.
    </StyledSuccess>
  );
};

export default Success;
