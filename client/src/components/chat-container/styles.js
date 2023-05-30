import styled from 'styled-components';

const MessagesContainer = styled.div`
	padding: 2rem;
	width: 500px;
	height: max-content;
	border: 3px solid black;
	border-radius: 10px;
`;
const Message = styled.div`
	position: relative;
	&::after {
		content: '';
		position: absolute;
		top: 6.5px;
		left: -15px;
		background-color: black;
		border-radius: 50%;
		width: 8px;
		height: 8px;
	}
`;

export { MessagesContainer, Message };
