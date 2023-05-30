import { useEffect, useState } from 'react';
import { Message, MessagesContainer } from './styles';
import { v4 } from 'uuid';
import socket from '../../sockets/socket';
const ChatContainer = () => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		socket.on('data', data => {
			// Sintaxis de funcion en el state, para no tener que esperar al render y tener acceso al estado actualizado , cosa muy rara
			setMessages(prevMessages => [...prevMessages, data]);
		});
	}, []);

	return (
		<>
			<form onSubmit={ev => handleInput(ev)}>
				<MessagesContainer>
					{messages.map(message => (
						<Message key={v4()}>
							<p>{message}</p>
						</Message>
					))}
				</MessagesContainer>
				<input type='text' name='message' id='message' />
				<button>ENVIAR</button>
			</form>
		</>
	);
};

const handleInput = ev => {
	ev.preventDefault();
	socket.emit('data', ev.target.message.value);
	ev.target.reset();
};

export default ChatContainer;
