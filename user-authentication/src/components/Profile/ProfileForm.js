import { useContext, useRef } from 'react';

import AuthContext from '../../context/auth-context';
import classes from './ProfileForm.module.css';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
	const newPasswordInputRef = useRef();
	const history = useHistory();

	const authCtx = useContext(AuthContext);

	const submitHandler = (e) => {
		e.preventDefault();

		const enteredNewPassword = newPasswordInputRef.current.value;

		//validation

		fetch(
			'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD3VeLyb2CCMdBYsaTehfDh1VpYPpkKz-o',
			{
				method: 'POST',
				body: JSON.stringify({
					idToken: authCtx.token,
					password: enteredNewPassword,
					returnSecureToken: false,
				}),
				headers: { 'Content-Type': 'application/json' },
			}
		).then((response) => {
			//Assumption: always succeeds

			history.replace('/');
		});
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor="new-password">New Password</label>
				<input
					type="password"
					id="new-password"
					ref={newPasswordInputRef}
					minLength="7"
				/>
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default ProfileForm;
