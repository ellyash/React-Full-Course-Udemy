import Output from './Output';
import { useState } from 'react';

function Greeting() {
	const [changedText, setChangedText] = useState(false);

	const changeTextHandler = () => {
		setChangedText(true);
	};

	return (
		<div>
			<h2>Hello World!</h2>
			{!changedText ? (
				<Output>Good to see you</Output>
			) : (
				<Output>Changed!</Output>
			)}
			<button onClick={changeTextHandler}>Change text!</button>
		</div>
	);
}

export default Greeting;
