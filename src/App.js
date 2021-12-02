import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicks: 0,
		};
	}

	IncrementItem = () => {
		this.setState({ clicks: this.state.clicks + 1 });
	};
	DecreaseItem = () => {
		this.setState({ clicks: this.state.clicks - 1 });
	};

	render() {
		return (
			<div className="app">
				<div className="buttons">
					<button onClick={this.IncrementItem}>+</button>
					<button onClick={this.DecreaseItem}>-</button>
				</div>
				<input type="number" value={this.state.clicks} />
			</div>
		);
	}
}

export default App;
