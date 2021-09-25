import { Route } from 'react-router-dom';

function Welcome() {
	return (
		<section>
			<h1>Welcome Page</h1>
			<Route path="/welcome/new-user">
				<p>Welcome dear</p>
			</Route>
		</section>
	);
}

export default Welcome;
