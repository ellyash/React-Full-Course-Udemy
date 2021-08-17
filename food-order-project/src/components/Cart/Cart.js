import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import React, { useContext, useState } from 'react';
import CartContext from '../../context/cart-context';
import CartItem from './CartItem/CartItem';
import Checkout from './Checkout';

function Cart(props) {
	const [isCheckout, setIsCheckout] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);

	const cartCtx = useContext(CartContext);

	const totalAmount = cartCtx.totalAmount.toFixed(2);
	const hasItems = cartCtx.items.length > 0;

	const removeCartItem = (id) => {
		cartCtx.removeItem(id);
	};

	const addCartItem = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={removeCartItem.bind(null, item.id)}
					onAdd={addCartItem.bind(null, item)}
				/>
			))}
		</ul>
	);

	const handleOrder = () => {
		setIsCheckout(true);
	};

	const handleSubmitOrder = async (userData) => {
		setIsSubmitting(true);
		await fetch(
			'https://movie-rater-d5b12-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
			{
				method: 'POST',
				body: JSON.stringify({
					user: userData,
					orderedItems: cartCtx.items,
				}),
			}
		);
		setIsSubmitting(false);
		setDidSubmit(true);
		cartCtx.clearCart();
	};

	const MealButtons = (
		<div className={classes.actions}>
			<button className={classes['button--alt']} onClick={props.onHideCart}>
				Close
			</button>
			<button
				onClick={handleOrder}
				className={classes.button}
				disabled={!hasItems}
			>
				Order
			</button>
		</div>
	);

	const cartModalContent = (
		<React.Fragment>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount:</span>
				<span>${totalAmount}</span>
			</div>
			{isCheckout && (
				<Checkout
					onConfirm={handleSubmitOrder}
					onCancel={props.onHideCart}
				/>
			)}
			{!isCheckout && MealButtons}
		</React.Fragment>
	);

	const isSubmittingModalContent = <p>Sending order data.</p>;

	const didSubmitModalContent = (
		<React.Fragment>
			<p>Successfully sent the order!</p>
			<div className={classes.actions}>
				<button className={classes.button} onClick={props.onHideCart}>
					Close
				</button>
			</div>
		</React.Fragment>
	);

	return (
		<Modal onClose={props.onHideCart}>
			{!isSubmitting && !didSubmit && cartModalContent}
			{isSubmitting && isSubmittingModalContent}
			{!isSubmitting && didSubmit && didSubmitModalContent}
		</Modal>
	);
}

export default Cart;
