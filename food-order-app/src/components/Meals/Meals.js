import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import React from 'react';

function Meals() {
	return (
		<React.Fragment>
			<MealsSummary />
			<AvailableMeals />
		</React.Fragment>
	);
}
export default Meals;
