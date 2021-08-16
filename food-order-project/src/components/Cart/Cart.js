import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../context/cart-context';
import CartItem from './CartItem/CartItem';

function Cart(props) {
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

	return (
		<Modal onClose={props.onHideCart}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount:</span>
				<span>${totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button
					className={classes['button--alt']}
					onClick={props.onHideCart}
				>
					Close
				</button>
				<button className={classes.button} disabled={!hasItems}>
					Order
				</button>
			</div>
		</Modal>
	);
}

export default Cart;
