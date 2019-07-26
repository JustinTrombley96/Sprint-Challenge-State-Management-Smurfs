import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../reducers/actions';
import {Button, FormInput, Form} from 'shards-react'
import './App.css';



class SmurfForm extends Component {
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
				<Form onSubmit={this.handleAddSmurf}>
					<FormInput onChange={this.handleInputChange} placeholder='name' value={this.state.name} name='name' />
					<FormInput onChange={this.handleInputChange} placeholder='age' value={this.state.age} name='age' />
					<FormInput
						onChange={this.handleInputChange}
						placeholder='height'
						value={this.state.height}
						name='height'
					/>
					<Button pill theme='danger' type='submit'>
						Add to the village
					</Button>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	smurfs : state.smurfs,
});

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
