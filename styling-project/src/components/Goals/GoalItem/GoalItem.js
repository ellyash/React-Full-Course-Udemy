import React from 'react';

import GoalItemStyle from './GoalItemStyle';

const GoalItem = (props) => {
	// const [deleteText, setDeleteText] = useState('');

	const deleteHandler = () => {
		// setDeleteText('(Deleted!)');
		props.onDelete(props.id);
	};

	return (
		<GoalItemStyle onClick={deleteHandler}>
			{props.children}
		</GoalItemStyle>
	);
};

export default GoalItem;
