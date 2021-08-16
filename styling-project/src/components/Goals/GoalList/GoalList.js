import React from 'react';

import GoalItem from '../GoalItem/GoalItem';
import GoalListStyle from './GoalListStyle';

const GoalList = (props) => {
	return (
		<GoalListStyle>
			{props.items.map((goal) => (
				<GoalItem
					key={goal.id}
					id={goal.id}
					onDelete={props.onDeleteItem}
				>
					{goal.text}
				</GoalItem>
			))}
		</GoalListStyle>
	);
};

export default GoalList;
