import React from 'react';

function MyParagraph(props) {
	console.log('DemoParagraph');
	return <p>{props.children}</p>;
}

export default MyParagraph;
