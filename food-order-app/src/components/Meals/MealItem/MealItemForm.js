import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

function MealItemForm(props) {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		if (
			enteredAmount.trim().length === 0 ||
			enteredAmountNumber < 1 ||
			enteredAmount > 10
		) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(enteredAmountNumber);
	};

	return (
		<form className={classes.form} onSubmit={handleFormSubmit}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: 'amount_' + props.id,
					type: 'number',
					min: '1',
					max: '10',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>Add to cart</button>
			{!amountIsValid && (
				<p>Please enter a valid amount (1-10).</p>
			)}
		</form>
	);
}
export default MealItemForm;
