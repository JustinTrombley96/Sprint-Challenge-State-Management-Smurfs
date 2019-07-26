import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL } from '../reducers/actions';

const initialState = {
	smurfs     : [],
	error      : '',
	isFetching : false,
};

function reducer(state = initialState, action) {
	console.log('reducer', action);
	switch (action.type) {
		case FETCH_SMURFS_START:
			return {
				...state,
				isFetching : true,
				error      : 'Your action file is missing. Securet the file!',
			};
		case FETCH_SMURFS_SUCCESS:
			return {
				...state,
				smurfs     : action.payload,
				isFetching : false,
				error      : '',
			};
		case FETCH_SMURFS_FAIL:
			return {
				...state,
				error : action.payload,
			};
		default:
			return state;
	}
}
export default reducer;
