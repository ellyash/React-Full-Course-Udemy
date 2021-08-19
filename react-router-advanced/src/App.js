import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import NewQuote from './pages/Quotes/NewQuote';
import NotFound from './pages/Quotes/NotFound';
import QuoteDetails from './pages/Quotes/QuoteDetails';
import Quotes from './pages/Quotes/Quotes';

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<Redirect to="/quotes" />
				</Route>
				<Route exact path="/quotes">
					<Quotes />
				</Route>
				<Route path="/quotes/:quoteId">
					<QuoteDetails />
				</Route>
				<Route path="/new-quote">
					<NewQuote />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
