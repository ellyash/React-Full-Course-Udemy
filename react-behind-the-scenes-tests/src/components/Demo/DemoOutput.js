import React from 'react';
import MyParagraph from './MyParagraph';

function DemoOutput(props) {
	console.log('Demo');
	return <MyParagraph>{props.show ? 'NEW TEXT' : ''}</MyParagraph>;
}

export default React.memo(DemoOutput);
