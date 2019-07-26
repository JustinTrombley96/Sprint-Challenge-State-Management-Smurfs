import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADDED_SMURF_SUCCESS = 'ADDED_SMURF_SUCCESS';
export const ADDED_SMURF_ERROR = 'ADDED_SMURF_ERROR';

export const getSmurfs = () => dispatch => {
	dispatch({ type: FETCH_SMURFS_START });
	axios
		.get('http://localhost:3333/smurfs')
		.then(res => {
			dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
		})
		.catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: err }));
};

export const addSmurf = newSmurf => dispatch => {
	dispatch({ type: ADD_SMURF_START });
	axios
		.post('http://localhost:3333/smurfs', newSmurf)
		.then(res => {
			dispatch({ type: ADDED_SMURF_SUCCESS, payload: res.data });
		})
		.catch(err => dispatch({ type: ADDED_SMURF_ERROR, payload: err }));
};
