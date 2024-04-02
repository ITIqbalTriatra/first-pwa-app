import Chatbot from 'react-chatbot-kit';
import config from './Config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const ChatbotComponent = () => {
  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      {/* Chatbot Header */}
      <div className="bg-gray-100 p-4 rounded-t-lg">
        <h2 className="text-lg font-bold text-gray-800">Chatbot</h2>
      </div>

      {/* Chatbot Messages */}
      <div className="chatbot-messages mt-4">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
};

export default ChatbotComponent;