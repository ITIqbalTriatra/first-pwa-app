import React from "react";
import { useAppSelector } from "../redux/store";

const MessageParser = ({
  children,
  actions,
}: {
  children: any;
  actions: {
    handleGotIt: () => void;
    handleUserInput: () => void;
  };
}) => {
  const { name, date } = useAppSelector((state) => state.messageReducer.user);

  const parse = (message: string) => {
    if (message.includes("got it!")) {
      actions.handleGotIt();
    } else if (name) {
      actions.handleUserInput();
    } else if (message == '') {
      actions.handleGotIt();
    } else {
      actions.handleUserInput();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          parse,
          actions,
        })
      )}
    </div>
  );
};

export default MessageParser;
