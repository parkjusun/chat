import React,{Component} from 'react';
import ChatBot from 'react-simple-chatbot';


class chat extends Component{
    render(){
        return (
            <ChatBot
                headerTitle="Speech Synthesis"
                speechSynthesis={{ enable: true, lang: 'ko' }}
                steps={[
                    {
                        id: '1',
                        message: '너의 이름은 머야??',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        user: true,
                        trigger: '3',
                    },
                    {
                        id: '3',
                        message: '안녕 {previousValue}',
                        end: true,
                    },
                ]}
            />
        );

    }
    

}

export default chat;