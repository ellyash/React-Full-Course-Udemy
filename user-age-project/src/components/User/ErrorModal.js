import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
	return (
		<div className={classes.backdrop} onClick={props.onConfirm} />
	);
};

const ModalOverlay = (props) => {
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<h2>An Error Occured</h2>
			</header>
			<div className={classes.content}>
				<h3>{props.title}</h3>
				<p>{props.message}</p>
			</div>
			<footer className={classes.actions}>
				<Button onClick={props.onConfirm}>Close</Button>
			</footer>
		</Card>
	);
};

function ErrorModal(props) {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onConfirm={props.onConfirm}
				/>,
				document.getElementById('overlay-root')
			)}
		</React.Fragment>
	);
}
export default ErrorModal;
