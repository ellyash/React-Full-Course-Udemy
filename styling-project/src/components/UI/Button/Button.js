import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	width: 100%;
	font: inherit;
	padding: 0.5rem 1.5rem;
	//border: 1px solid #8b005d;
	color: white;
	background: ${(props) => props.theme.buttonColor};
	//box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
	cursor: pointer;
	border: none;
	border-radius: 10px;

	@media (min-width: 768px) {
		width: auto;
	}

	&:focus {
		outline: none;
	}

	&:hover,
	&:active {
		background: ${(props) => props.theme.buttonHover};
		//border-color: #ac0e77;
		//box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
	}
`;

/* const Button = (props) => {
	return (
		<button
			type={props.type}
			className="button"
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}; */

export default Button;
