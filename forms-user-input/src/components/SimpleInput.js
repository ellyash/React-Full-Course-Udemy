import { useState, useEffect } from 'react';

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [nameTouched, setNameTouched] = useState(false);

	const [enteredEmail, setEnteredEmail] = useState('');
	const [emailTouched, setEmailTouched] = useState(false);

	const [formIsValid, setFormIsValid] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== '';
	const nameInputIsInvalid = !enteredNameIsValid && nameTouched;

	const enteredEmailIsValid =
		enteredEmail.trim() !== '' && enteredEmail.includes('.');
	const emailInputIsInvalid = !enteredEmailIsValid && emailTouched;

	useEffect(() => {
		if (enteredNameIsValid && enteredEmailIsValid) {
			setFormIsValid(true);
		} else {
			setFormIsValid(false);
		}
	}, [enteredNameIsValid, enteredEmailIsValid]);

	const handleChangeInputName = (e) => {
		setEnteredName(e.target.value);
	};

	const handleNameInputBlur = () => {
		setNameTouched(true);
	};

	const handleChangeInputEmail = (e) => {
		setEnteredEmail(e.target.value);
	};

	const handleEmailInputBlur = () => {
		setEmailTouched(true);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		setNameTouched(true);
		setEmailTouched(true);

		if (!enteredNameIsValid || !enteredEmailIsValid) {
			return;
		}
		console.log(enteredName, enteredEmail);

		/* nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM WITH PLAIN JS*/
		setEnteredName('');
		setEnteredEmail('');
		setNameTouched(false);
		setEmailTouched(false);
	};

	const nameInputClasses = nameInputIsInvalid
		? 'form-control invalid'
		: 'form-control ';

	const emailInputClasses = emailInputIsInvalid
		? 'form-control invalid'
		: 'form-control ';

	return (
		<form onSubmit={handleFormSubmit}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={handleChangeInputName}
					onBlur={handleNameInputBlur}
					value={enteredName}
					autoComplete="off"
				/>
				{nameInputIsInvalid && (
					<p className="error-text">Name must not be empty.</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					onChange={handleChangeInputEmail}
					onBlur={handleEmailInputBlur}
					value={enteredEmail}
					autoComplete="on"
				/>
				{emailInputIsInvalid && (
					<p className="error-text">Please enter a valid email.</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
