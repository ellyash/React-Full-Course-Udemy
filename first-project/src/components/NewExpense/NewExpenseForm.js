import React, { useState } from 'react';
import './NewExpenseForm.css';

function NewExpenseForm(props) {
	const current = new Date();
	const date_now = `${current.getFullYear()}-${
		current.getMonth() + 1
	}-${current.getDate()}`;

	const [inputTitle, setInputTitle] = useState('');
	const [inputAmount, setInputAmount] = useState('');
	const [inputDate, setInputDate] = useState('');
	const [expandExpense, setExpandExpense] = useState(false);
	// Another way to do it
	/* const [userInput, setUserInput] = useState({
		setinputTitle: '',
		setmount: '',
		setinputDate: '',
	}); */

	const handleTitleChange = (e) => {
		setInputTitle(e.target.value);
		//OR
		/* setUserInput({
			...userInput,
			setinputTitle: e.target.value,
		}); */
		//OR
		/* 	setUserInput((prevState) => {
			return { ...prevState, setinputTitle: e.target.value };
		}); */
	};

	const handleAmountChange = (e) => {
		setInputAmount(e.target.value);
		//OR
		/* setUserInput({
			...userInput,
			setinputAmount: e.target.value,
		}); */
		//OR
		/* 	setUserInput((prevState) => {
			return { ...prevState, setinputAmount: e.target.value };
		}); */
	};

	const handleDateChange = (e) => {
		setInputDate(e.target.value);
		//OR
		/* setUserInput({
			...userInput,
			setinputDate: e.target.value,
		}); */
		//OR
		/* setUserInput((prevState) => {
			return { ...prevState, setinputDate: e.target.value };
		}); */
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			title: inputTitle,
			amount: +inputAmount,
			date: new Date(inputDate),
		};
		props.onFormSubmit(data);
		setInputTitle('');
		setInputAmount('');
		setInputDate('');
		setExpandExpense(false);
	};

	const handleChangeExpand = () => {
		if (expandExpense === false) {
			setExpandExpense(true);
		} else {
			setExpandExpense(false);
		}
	};

	if (expandExpense === false) {
		return (
			<button onClick={handleChangeExpand}>
				Add New Expanse
			</button>
		);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						onChange={handleTitleChange}
						value={inputTitle}
					/>
				</div>
				<div className="new-expense__control">
					<label>Cost</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={inputAmount}
						onChange={handleAmountChange}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min={date_now}
						max="2022-12-31"
						value={inputDate}
						onChange={handleDateChange}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button onClick={handleChangeExpand}>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

export default NewExpenseForm;
