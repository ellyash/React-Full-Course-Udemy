import { useReducer } from 'react';

const initialInputState = {
	value: '',
	isTouched: false,
};

const inputStateReducer = (state, action) => {
	if (action.type === 'INPUT') {
		return { value: action.value, isTouched: state.isTouched };
	}
	if (action.type === 'BLUR') {
		return { isTouched: true, value: state.value };
	}
	if (action.type === 'RESET') {
		return { ...initialInputState };
	}

	return initialInputState;
};

function useInput(validateValue) {
	const [inputState, dispatch] = useReducer(
		inputStateReducer,
		initialInputState
	);

	const valueIsValid = validateValue(inputState.value);
	const hasError = !valueIsValid && inputState.isTouched;

	const handleValueChange = (e) => {
		dispatch({ type: 'INPUT', value: e.target.value });
	};

	const handleValueBlur = () => {
		dispatch({ type: 'BLUR' });
	};

	const reset = () => {
		dispatch({ type: 'RESET' });
	};

	return {
		value: inputState.value,
		isValid: valueIsValid,
		hasError,
		handleValueChange,
		handleValueBlur,
		reset,
	};
}

export default useInput;
