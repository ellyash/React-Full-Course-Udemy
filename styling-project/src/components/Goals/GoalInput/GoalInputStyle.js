import styled from 'styled-components';

const GoalInputStyle = styled.div`
	margin: 0.5rem 0;

	& label {
		font-weight: bold;
		display: block;
		margin-bottom: 0.5rem;
		color: ${(props) =>
			props.invalid ? 'red' : props.theme.textColor};
		text-align: center;
	}

	& input {
		display: block;
		width: 100%;
		border: 1px solid
			${(props) =>
				props.invalid ? 'red' : props.theme.textColor};
		background: ${(props) =>
			props.invalid ? '#ffd7d7' : 'transparent'};
		font: inherit;
		border-radius: 8px;
		line-height: 1.5rem;
		padding: 0 0.25rem;
	}

	& input:focus {
		outline: none;
		background: #fad0ec;
		border-color: #8b005d;
	}
`;

export default GoalInputStyle;
