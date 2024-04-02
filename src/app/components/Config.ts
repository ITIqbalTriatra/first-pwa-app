import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'TriatraBot';

const config = {
    initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`, {
        widget: 'options'
    })],
    botName: botName,
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        },
    },
};

export default config;