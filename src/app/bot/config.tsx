import { createChatBotMessage } from "react-chatbot-kit";
import GotIt from "./widgets/options/GotIt";
import AgeDropdown from "./widgets/options/AgeDropdown";
import IWidget from "react-chatbot-kit/build/src/interfaces/IWidget";
import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig";
import tetaLogo from '../assets/teta.svg';
import chatGpt from '../assets/chatgpt.svg';
import DateOptions from "./widgets/options/DateOptions";

const config: IConfig = {
  botName: "Triatra System Bot",
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to room meeting management system!`, {
      widget: "gotIt",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  customComponents: {
    botAvatar: (props: any) => <img src={tetaLogo} className="w-12" alt="bot" {...props} />,
  },
  widgets: [
    {
      widgetName: "gotIt",
      widgetFunc: (props: any) => <GotIt {...props} />,
    },
    {
      widgetName: "ageDropdown",
      widgetFunc: (props: any) => <AgeDropdown {...props} />,
    },
    {
      widgetName: "dateOptions",
      widgetFunc: (props: any) => <DateOptions {...props} />,
    },
  ] as IWidget[],
};

export default config;
