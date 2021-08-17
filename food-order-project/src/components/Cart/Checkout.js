import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

function Checkout(props) {
	const [formInputsValidity, setFormInputsValidity] = useState({
		name: true,
		city: true,
		street: true,
		postal: true,
	});

	const nameInputRef = useRef();
	const cityInputRef = useRef();
	const streetInputRef = useRef();
	const postalInputRef = useRef();

	const handleConfirm = (e) => {
		e.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredCity = cityInputRef.current.value;
		const enteredStreet = streetInputRef.current.value;
		const enteredPostal = postalInputRef.current.value;

		const enteredNameIsValid = !isEmpty(enteredName);
		const enteredCityIsValid = !isEmpty(enteredCity);
		const enteredStreetIsValid = !isEmpty(enteredStreet);

		const enteredPostalIsValid =
			isFiveChars(enteredPostal) && !isEmpty(enteredPostal);

		setFormInputsValidity({
			name: enteredNameIsValid,
			city: enteredCityIsValid,
			street: enteredStreetIsValid,
			postal: enteredPostalIsValid,
		});

		const formIsValid =
			enteredNameIsValid &&
			enteredCityIsValid &&
			enteredStreetIsValid &&
			enteredPostalIsValid;

		if (!formIsValid) {
			return;
		}

		props.onConfirm({
			name: enteredName,
			city: enteredCity,
			street: enteredStreet,
			postal: enteredPostal,
		});
	};

	const nameControlClasses = `${classes.control} ${
		formInputsValidity.name ? '' : classes.invalid
	}`;

	const cityControlClasses = `${classes.control} ${
		formInputsValidity.city ? '' : classes.invalid
	}`;

	const streetControlClasses = `${classes.control} ${
		formInputsValidity.street ? '' : classes.invalid
	}`;

	const postalControlClasses = `${classes.control} ${
		formInputsValidity.postal ? '' : classes.invalid
	}`;

	return (
		<form className={classes.form} onSubmit={handleConfirm}>
			<div className={nameControlClasses}>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" ref={nameInputRef} required />
				{!formInputsValidity.name && <p>Please enter a valid name.</p>}
			</div>
			<div className={cityControlClasses}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityInputRef} required />
				{!formInputsValidity.city && <p>Please enter a valid city.</p>}
			</div>
			<div className={streetControlClasses}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetInputRef} required />
				{!formInputsValidity.street && <p>Please enter a valid street.</p>}
			</div>
			<div className={postalControlClasses}>
				<label htmlFor="postal">Postal Code</label>
				<input
					type="text"
					pattern="[0-9]{5}"
					id="postal"
					maxLength="5"
					ref={postalInputRef}
					required
				/>
				{!formInputsValidity.postal && (
					<p>Please enter a valid postal. (5 characters long)</p>
				)}
			</div>
			<div className={classes.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
}

export default Checkout;
