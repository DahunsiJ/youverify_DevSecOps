// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3003');

// const ChatTwo = () => {
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');

//     useEffect(() => {
//         socket.on('message', (message) => {
//             setMessages((prev) => [...prev, message]);
//         });

//         return () => {
//             socket.off('message');
//         };
//     }, []);

//     const sendMessage = () => {
//         socket.emit('message', input);
//         setInput('');
//     };

//     return (
//         <div>
//             <div>
//                 {messages.map((msg, index) => (
//                     <div key={index}>{msg}</div>
//                 ))}
//             </div>
//             <input
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
//             />
//         </div>
//     );
// };

// export default ChatTwo;