import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import WebSocketService from "./webSocketService";

function App() {
    useEffect(() => {
        WebSocketService.connect('ws://140.238.54.136:8080/chat/chat')
        WebSocketService.registerCallback('LOGIN', (data : any) => {
            console.log('Login response:', data);
        });

        WebSocketService.registerCallback('GET_PEOPLE_CHAT_MES', (data : any) => {
            console.log('response:', data);
        });

        WebSocketService.registerCallback('AUTH', (data : any) => {
            console.log('AUTH response:', data);
        });

        return () =>{
            WebSocketService.close();
        }

    }, []);

    const handleLogin = () => {
        WebSocketService.sendMessage({
            action: 'onchat',
            data: {
                event: 'LOGIN',
                data: {
                    user: '21130035',
                    pass: '21130035'
                }
            }
        });

        // WebSocketService.sendMessage({
        //
        //     action: 'onchat',
        //     data: {
        //     event: 'GET_PEOPLE_CHAT_MES',
        //         data: {
        //         name: 'ti',
        //         page:1
        //         }
        //     }
        // })
    }

  return (
    <div className="App">
      <button onClick={handleLogin}>CLICK</button>
    </div>
  );
}

export default App;
