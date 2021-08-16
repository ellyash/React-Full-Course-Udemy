import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from './ErrorModal';
import Wrapper from '../../Helpers/Wrapper';

function AddUser(props) {
	/* const [username, setUsername] = useState('');
	const [age, setAge] = useState(''); */
	// ref to only read data
	const nameInputRef = useRef();
	const ageInputRef = useRef();
	const [error, setError] = useState();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const name = nameInputRef.current.value;
		const userAge = ageInputRef.current.value;
		if (name.trim().length === 0 || userAge.trim().length === 0) {
			setError({
				title: 'Invalid Input',
				message:
					'Please enter a valid name and age (non-empty values).',
			});
			return;
		}
		if (+userAge < 1) {
			setError({
				title: 'Invalid Input',
				message: 'Please a valid age (greater then 0)',
			});
			return;
		}
		props.onAddUser(name, userAge);
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
		/* setUsername('');
		setAge(''); */
	};

	/* const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};
	const handleAgeChange = (e) => {
		setAge(e.target.value);
	}; */

	const handleCloseModal = () => {
		setError(null);
	};
	return (
		<React.Fragment>
			{error && (
				<ErrorModal
					onConfirm={handleCloseModal}
					title={error.title}
					message={error.message}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={handleFormSubmit}>
					<label htmlFor="username">Your Name</label>
					<input
						id="username"
						type="text"
						/* value={username}
						onChange={handleUsernameChange} */
						ref={nameInputRef}
					/>
					<label htmlFor="age">Age</label>
					<input
						id="age"
						type="number"
						/* value={age}
						onChange={handleAgeChange} */
						ref={ageInputRef}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</React.Fragment>
	);
}

export default AddUser;
