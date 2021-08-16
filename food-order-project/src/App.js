import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './context/CartProvider';

function App() {
	const [cartModal, setCardModal] = useState(false);

	const handleShowCart = () => {
		setCardModal(true);
	};
	const handleHideCart = () => {
		setCardModal(false);
	};

	return (
		<CartProvider>
			{cartModal && <Cart onHideCart={handleHideCart} />}
			<Header onShowCart={handleShowCart} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
