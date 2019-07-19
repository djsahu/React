import React from 'react';
import Chatkit from '@pusher/chatkit';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import RoomList from './RoomList';
import NewRoomForm from './NewRoomForm';
import { tockenUrl, instanceLocator} from './Config'


class App extends React.Component{

    componentDidMount(){
        const chatManager = new Chatkit.chatManager({
            instanceLocator,
            userId: 'Devraj',
            tokenProvider: new Chatkit.tokenProvider({
                url: tockenUrl
            })
        })
        chatManager.connect()
        .then(currentUser => {
            currentUser.subscribeToRoom({
                roomId: 25066749,
                hooks:{
                    onNewMessage: message => {
                        console.log('message.text: ',message.text);
                    }
                }

            })
        })

    }

    render(){
        return(
            <div className='app'>
            <RoomList/>
            <MessageList/>
            <SendMessageForm/>
            <NewRoomForm/>
            </div>
        );
    }
}

export default App;