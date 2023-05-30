import ChatContainer from './components/chat-container/ChatContainer';
import Header from './components/header/Header';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Header />
			<ChatContainer />
		</>
	);
};

export default App;
