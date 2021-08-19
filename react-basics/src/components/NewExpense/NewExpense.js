import React from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

function NewExpense(props) {
	const handleFormSubmit = (formData) => {
		const data = {
			...formData,
			id: Math.random().toString(),
		};
		props.onAddExpense(data);
	};

	return (
		<div className="new-expense">
			<NewExpenseForm onFormSubmit={handleFormSubmit} />
		</div>
	);
}
export default NewExpense;
