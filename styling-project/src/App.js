import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './themes';
import GoalList from './components/Goals/GoalList/GoalList';
import GoalInput from './components/Goals/GoalInput/GoalInput';
import { AppStyleList, AppStyleForm, AppTheme } from './AppStyle';

const App = () => {
	const [courseGoals, setCourseGoals] = useState([
		{ text: 'Do all exercises!', id: 'g1' },
		{ text: 'Finish the course!', id: 'g2' },
	]);
	const [theme, setTheme] = useState('lightTheme');

	const addGoalHandler = (enteredText) => {
		setCourseGoals((prevGoals) => {
			const updatedGoals = [...prevGoals];
			updatedGoals.unshift({
				text: enteredText,
				id: Math.random().toString(),
			});
			return updatedGoals;
		});
	};

	const deleteItemHandler = (goalId) => {
		setCourseGoals((prevGoals) => {
			const updatedGoals = prevGoals.filter(
				(goal) => goal.id !== goalId
			);
			return updatedGoals;
		});
	};

	const changeTheme = () => {
		if (theme === 'darkTheme') {
			setTheme('lightTheme');
		} else {
			setTheme('darkTheme');
		}
	};

	let content = (
		<p style={{ textAlign: 'center' }}>
			No goals found. Maybe add one?
		</p>
	);

	if (courseGoals.length > 0) {
		content = (
			<GoalList
				items={courseGoals}
				onDeleteItem={deleteItemHandler}
			/>
		);
	}

	return (
		<ThemeProvider
			theme={theme === 'lightTheme' ? lightTheme : darkTheme}
		>
			<AppTheme>
				<AppStyleForm>
					<button onClick={changeTheme}>
						Change Theme
					</button>
					<GoalInput onAddGoal={addGoalHandler} />
				</AppStyleForm>
				<AppStyleList>
					<p>Your Goals</p>
					{content}
					{/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
				</AppStyleList>
			</AppTheme>
		</ThemeProvider>
	);
};

export default App;
