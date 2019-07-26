import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../reducers/actions';

class Form extends Component {
	state = {
		name   : '',
		age    : '',
		height : '',
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleAddSmurf = event => {
		event.preventDefault();

		const smurf = this.state;
		this.props.addSmurf(smurf);

		this.setState({
			name   : '',
			age    : '',
			height : '',
		});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleAddSmurf}>
					<input onChange={this.handleInputChange} placeholder='name' value={this.state.name} name='name' />
					<input onChange={this.handleInputChange} placeholder='age' value={this.state.age} name='age' />
					<input
						onChange={this.handleInputChange}
						placeholder='height'
						value={this.state.height}
						name='height'
					/>
					<button type='submit'>Add to the village</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	smurfs : state.smurfs,
});

export default connect(mapStateToProps, { addSmurf })(Form);
