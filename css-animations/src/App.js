import './App.css';

import React, { Component } from 'react';

import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';
import Modal from './components/Modal/Modal';
import Transition from 'react-transition-group/Transition';

class App extends Component {
	state = {
		modalIsOpen: false,
		showBlock: true,
	};

	showModal = () => {
		this.setState({
			modalIsOpen: true,
		});
	};
	hideModal = () => {
		this.setState({
			modalIsOpen: false,
		});
	};

	render() {
		return (
			<div className="App">
				<h1>React Animations</h1>
				<button
					className="Button"
					onClick={() =>
						this.setState((prevState) => ({
							showBlock: !prevState.showBlock,
						}))
					}
				>
					Toggle
				</button>
				<br />
				<Transition
					in={this.state.showBlock}
					timeout={500}
					mountOnEnter
					unmountOnExit
					/* onEnter={() => console.log('onEnter')}
					onEntering={() => console.log('onEntering')}
					onEntered={() => console.log('onEntered')}
					onExit={() => console.log('onExit')}
					onExiting={() => console.log('onExiting')}
					onExited={() => console.log('onExited')} */
				>
					{(state) => (
						<div
							style={{
								backgroundColor: 'red',
								width: 100,
								height: 100,
								margin: 'auto',
								transition: 'opacity 1s ease-out',
								opacity: state === 'exiting' ? 0 : 1,
							}}
						/>
					)}
				</Transition>

				<Modal show={this.state.modalIsOpen} closed={this.hideModal} />

				{this.state.modalIsOpen ? <Backdrop show /> : null}
				<button className="Button" onClick={this.showModal}>
					Open Modal
				</button>
				<h3>Animating Lists</h3>
				<List />
			</div>
		);
	}
}

export default App;
