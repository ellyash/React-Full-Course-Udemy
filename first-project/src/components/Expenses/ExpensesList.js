import React, { useState } from 'react';
import Card from '../UI/Card';
import './ExpensesList.css';
import ExpenseFilter from './ExpensesFilter';
import Expenses from './Expenses';
import ExpensesChart from './ExpensesChart';

function ExpensesList(props) {
	const [filteredYear, setFilteredYear] = useState('');

	const handleFilterSelect = (filterData) => {
		setFilteredYear(filterData);
	};

	const filteredExpenses = props.items.filter((expense) => {
		if (filteredYear !== '') {
			return (
				expense.date.getFullYear().toString() === filteredYear
			);
		} else {
			return expense;
		}
	});

	return (
		<Card className="expenses">
			<ExpenseFilter
				onFilterSelect={handleFilterSelect}
				selected={filteredYear}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<Expenses items={filteredExpenses} />
		</Card>
	);
}

export default ExpensesList;
