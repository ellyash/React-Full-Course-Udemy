import { useContext, useEffect, useState } from 'react';

import React from 'react';
import CartContext from '../../context/cart-context';
import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';

function HeaderCartButton(props) {
	const [highlight, setHighlight] = useState(false);
	const cartCtx = useContext(CartContext);

	const { items } = cartCtx;

	const numberOfItems = items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	const btnClasses = `${classes.button} ${
		highlight ? classes.bump : ''
	}`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setHighlight(true);

		const timer = setTimeout(() => {
			setHighlight(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfItems}</span>
		</button>
	);
}
export default HeaderCartButton;
