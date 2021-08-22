import './Backdrop.css';

import React from 'react';

const backdrop = (props) => {
	const cssClasses = [
		'Backdrop',
		props.show ? 'BackdropOpened' : 'BackdropClosed',
	];

	return <div className={cssClasses.join(' ')}></div>;
};

export default backdrop;
