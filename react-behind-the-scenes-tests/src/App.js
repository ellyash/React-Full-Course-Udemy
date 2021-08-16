import React, { useState, useCallback, useMemo } from 'react';
import Button from './components/UI/Button/Button';
import DemoList from './components/Demo/DemoList';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
	/* 	const [showParagraph, setShowParagraph] = useState(false);
	const [allowToggle, setAllowToggle] = useState(false);

	console.log('running');

	const toggleParagraph = useCallback(() => {
		if (allowToggle)
			setShowParagraph((prevShowParagraph) => !prevShowParagraph);
	}, [allowToggle]);

	const allowToggleHandler = () => {
		setAllowToggle((prevAllowToggle) => !prevAllowToggle);
	}; */
	/* return (
		<div className="app">
			<h1>Hi there!</h1>
			<DemoOutput show={showParagraph} />
			<Button onClick={allowToggleHandler}>Allow Toggle</Button>
			<Button onClick={toggleParagraph}>Toggle Paragraph</Button>
		</div>
	); */
	const [listTitle, setListTitle] = useState('My List');

	const changeTitleHandler = useCallback(() => {
		setListTitle('New Title');
	}, []);

	const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

	return (
		<div className="app">
			<DemoList title={listTitle} items={listItems} />
			<Button onClick={changeTitleHandler}>
				Change List Title
			</Button>
		</div>
	);
}

export default App;
