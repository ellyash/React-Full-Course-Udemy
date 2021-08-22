import { useContext, useRef } from 'react';

import { TodosContext } from '../context/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
	const todosCtx = useContext(TodosContext);

	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			return;
		}

		todosCtx.addTodo(enteredText);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<label htmlFor="text">Todo Text</label>
			<input type="text" ref={todoTextInputRef} />
			<button>Add todo</button>
		</form>
	);
};

export default NewTodo;
