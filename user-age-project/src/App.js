import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
	const [usersList, setUsersList] = useState([]);

	const handleAddUser = (name, age) => {
		setUsersList((prevState) => {
			return [
				...prevState,
				{ name, age, id: Math.random().toString() },
			];
		});
	};

	return (
		<div>
			<AddUser onAddUser={handleAddUser} />
			<UsersList users={usersList} />
		</div>
	);
}

export default App;
