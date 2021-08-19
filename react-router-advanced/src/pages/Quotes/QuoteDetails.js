import { Fragment, useEffect } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';

import Comments from '../../components/comments/Comments';
import HighlightedQuote from '../../components/quotes/HighlightedQuote';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import NoQuotesFound from '../../components/quotes/NoQuotesFound';
import { getSingleQuote } from '../../lib/api';
import useHttp from '../../hooks/use-http';

const DUMMY_QUOTES = [
	{ id: 'q1', author: 'Luke Percival', text: 'Learning react is awesome' },
	{ id: 'q2', author: 'Jim Percival', text: 'React is amazing' },
];

function QuoteDetails() {
	const match = useRouteMatch();
	const params = useParams();

	const { quoteId } = params;

	const {
		sendRequest,
		status,
		data: loadedQuote,
		error,
	} = useHttp(getSingleQuote, true);

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	if (status === 'pending') {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}
	if (error) {
		return <p className="centered focused">{error}</p>;
	}

	if (!loadedQuote.text) {
		return <p>Quote not found</p>;
	}

	return (
		<Fragment>
			<HighlightedQuote
				text={loadedQuote.text}
				author={loadedQuote.author}
			/>
			<Route path={match.path} exact>
				<div className="centered">
					<Link className="btn--flat" to={`${match.url}/comments`}>
						Show Comments
					</Link>
				</div>
			</Route>

			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
}

export default QuoteDetails;
