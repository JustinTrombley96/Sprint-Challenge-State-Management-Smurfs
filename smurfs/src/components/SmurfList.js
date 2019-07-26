import React from 'react';
import { getSmurfs } from '../reducers/actions';
import { connect } from 'react-redux';

const SmurfList = props => {
	const fetchSmurfs = e => {
		e.preventDefault();
		props.getSmurfs();
	};
	return (
		<div>
			<div>{props.smurfs.map(smurfs => <>
                <h1 key={smurfs.url}>Name: {smurfs.name}</h1>
                <h5 key={smurfs.url}>Age: {smurfs.age}</h5>
                <h5 key={smurfs.url}>Height: {smurfs.height}</h5>
                </>
                )}</div>
			{props.error && <p className='error'>{props.error}</p>}
			<button onClick={fetchSmurfs}>COLLECT THE SMURFS</button>
		</div>
	);
};

const mapStateToProps = state => ({
	smurfs     : state.smurfs,
	error      : state.error,
	isFetching : state.isFetching,
});
export default connect(mapStateToProps, { getSmurfs })(SmurfList);