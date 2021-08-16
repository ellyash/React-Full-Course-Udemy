import styled from 'styled-components';

export const AppStyleForm = styled.section`
	background-color: ${(props) => props.theme.inputBgColor};
	width: 30rem;
	max-width: 90%;
	margin: 3rem auto;
	padding: 2rem;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
`;
export const AppStyleList = styled.section`
	background-color: ${(props) => props.theme.inputBgColor};
	width: 35rem;
	max-width: 90%;
	margin: 3rem auto;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
	border-radius: 10px;

	& p {
		color: ${(props) => props.theme.textColor};
		text-align: center;
		font-size: 2rem;
		margin: 10px;
		padding-bottom: 10px;
		font-weight: bold;
	}
`;
export const AppTheme = styled.div`
	background-color: ${(props) => props.theme.bgColor};
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;
