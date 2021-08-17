import useInput from '../hooks/useInput';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('.');

const BasicForm = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		handleValueChange: handleNameChange,
		handleValueBlur: handleNameBlur,
		reset: resetNameInput,
	} = useInput(isNotEmpty);

	const {
		value: enteredLastName,
		isValid: enteredLastNameIsValid,
		hasError: lastNameInputHasError,
		handleValueChange: handleLastNameChange,
		handleValueBlur: handleLastNameBlur,
		reset: resetLastNameInput,
	} = useInput(isNotEmpty);

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		handleValueChange: handleEmailChange,
		handleValueBlur: handleEmailBlur,
		reset: resetEmailInput,
	} = useInput(isNotEmpty, isEmail);

	let formIsValid = false;

	if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (
			!enteredNameIsValid ||
			!enteredLastNameIsValid ||
			!enteredEmailIsValid
		) {
			return;
		}
		console.log(enteredName, enteredLastName, enteredEmail);

		resetNameInput();
		resetLastNameInput();
		resetEmailInput();
	};

	const nameInputClasses = nameInputHasError
		? 'form-control invalid'
		: 'form-control ';

	const lastNameInputClasses = lastNameInputHasError
		? 'form-control invalid'
		: 'form-control ';

	const emailInputClasses = emailInputHasError
		? 'form-control invalid'
		: 'form-control ';

	return (
		<form onSubmit={handleFormSubmit}>
			<div className="control-group">
				<div className={nameInputClasses}>
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						id="name"
						onChange={handleNameChange}
						onBlur={handleNameBlur}
						value={enteredName}
						autoComplete="off_420"
					/>
					{nameInputHasError && <p>This field can't be empty.</p>}
				</div>
				<div className={lastNameInputClasses}>
					<label htmlFor="last-name">Last Name</label>
					<input
						type="text"
						id="last-name"
						onChange={handleLastNameChange}
						onBlur={handleLastNameBlur}
						value={enteredLastName}
						autoComplete="off_420"
					/>
					{lastNameInputHasError && <p>This field can't be empty.</p>}
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="email">E-Mail Address</label>
				<input
					type="email"
					id="email"
					onChange={handleEmailChange}
					onBlur={handleEmailBlur}
					value={enteredEmail}
				/>
				{emailInputHasError && (
					<p className="error-text">This field is not valid</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
