import { render, screen } from '@testing-library/react';

import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

describe('Greeting Component', () => {
	test('renders hello world', () => {
		//Arrange

		render(<Greeting />);
		//Act
		//... nothing

		//Assert
		const outputElement = screen.getByText('Hello World!');
		expect(outputElement).toBeInTheDocument();
	});

	test('renders good to see you if the button was NOT clicked', () => {
		//Arrange

		render(<Greeting />);
		//Act
		//... nothing

		//Assert
		const outputElement = screen.getByText('good to see you', {
			exact: false,
		});
		expect(outputElement).toBeInTheDocument();
	});
	test('renders Changed! if the button was clicked', () => {
		//Arrange

		render(<Greeting />);
		//Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		//Assert
		const outputElement = screen.getByText('Changed!');
		expect(outputElement).toBeInTheDocument();
	});
	test('does not render good to see you if the button was clicked', () => {
		//Arrange

		render(<Greeting />);
		//Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		//Assert
		const outputElement = screen.queryByText('good to see you', {
			exact: false,
		});
		expect(outputElement).toBeNull();
	});
});
