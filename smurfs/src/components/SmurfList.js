import React from 'react';
import { getSmurfs } from '../reducers/actions';
import { connect } from 'react-redux';
import {Button} from 'shards-react'


const SmurfList = props => {
	const fetchSmurfs = e => {
		e.preventDefault();
		props.getSmurfs();
	};
	return (
		<div>
			<div>{props.smurfs.map(smurfs => <>
                <h1 key={Date.now()}>Name: {smurfs.name}</h1>
                <h5 key={Date.now()}>Age: {smurfs.age}</h5>
                <h5 key={Date.now()}>Height: {smurfs.height}</h5>
                </>
                )}</div>
			{props.error && <p className='error'>{props.error}</p>}
			<Button pill theme="danger"onClick={fetchSmurfs}>COLLECT THE SMURFS</Button>
		</div>
	);
};

const mapStateToProps = state => ({
	smurfs     : state.smurfs,
	error      : state.error,
	isFetching : state.isFetching,
});
export default connect(mapStateToProps, { getSmurfs })(SmurfList);
