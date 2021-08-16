import styled from 'styled-components';

const GoalItemStyle = styled.li`
	margin: 1rem 0;
	background: ${(props) => props.theme.buttonColor};
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	color: white;
	padding: 1rem 2rem;
	cursor: pointer;
	&:hover {
		background: ${(props) => props.theme.buttonHover};
	}
`;
export default GoalItemStyle;
