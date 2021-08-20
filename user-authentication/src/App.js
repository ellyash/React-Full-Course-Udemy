import { Redirect, Route, Switch } from 'react-router-dom';

import AuthContext from './context/auth-context';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import { useContext } from 'react';

function App() {
	const authCtx = useContext(AuthContext);

	const isLoggedIn = authCtx.isLoggedIn;

	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				{!isLoggedIn && (
					<Route path="/auth">
						<AuthPage />
					</Route>
				)}
				{isLoggedIn && (
					<Route path="/profile">
						<UserProfile />
					</Route>
				)}
				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
