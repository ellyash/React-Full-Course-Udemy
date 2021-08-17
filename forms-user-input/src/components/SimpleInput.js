import useInput from '../hooks/useInput';

const SimpleInput = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		handleValueChange: handleNameChange,
		handleValueBlur: handleNameBlur,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== '');

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		handleValueChange: handleEmailChange,
		handleValueBlur: handleEmailBlur,
		reset: resetEmailInput,
	} = useInput((value) => value.trim() !== '' && value.includes('.'));

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!enteredNameIsValid || !enteredEmailIsValid) {
			return;
		}
		console.log(enteredName, enteredEmail);

		/* nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM WITH PLAIN JS*/
		resetNameInput();
		resetEmailInput();
	};

	const nameInputClasses = nameInputHasError
		? 'form-control invalid'
		: 'form-control ';

	const emailInputClasses = emailInputHasError
		? 'form-control invalid'
		: 'form-control ';

	return (
		<form onSubmit={handleFormSubmit}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={handleNameChange}
					onBlur={handleNameBlur}
					value={enteredName}
					autoComplete="off"
				/>
				{nameInputHasError && (
					<p className="error-text">Name must not be empty.</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					onChange={handleEmailChange}
					onBlur={handleEmailBlur}
					value={enteredEmail}
					autoComplete="on"
				/>
				{emailInputHasError && (
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
