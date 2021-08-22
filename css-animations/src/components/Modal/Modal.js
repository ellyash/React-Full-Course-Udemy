import './Modal.css';

import CSSTransition from 'react-transition-group/CSSTransition';
import React from 'react';

const animationTiming = {
	enter: 500,
	exit: 1000,
};

const modal = (props) => {
	return (
		<CSSTransition
			in={props.show}
			timeout={animationTiming}
			mountOnEnter
			unmountOnExit
			classNames="fade-slide"
		>
			<div className="Modal">
				<h1>A Modal</h1>
				<button className="Button" onClick={props.closed}>
					Dismiss
				</button>
			</div>
		</CSSTransition>
	);
};

export default modal;
