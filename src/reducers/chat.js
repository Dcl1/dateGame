import * as types from '../actions/actionTypes';

const initialState = {
	clist : []
}

export default function chatreducer( state = initialState, action){

	console.log(state);

	switch (action.type) {
		case types.UPDATEMESSAGELIST:
			return {
				...state,
				clist : [
					...state.clist,
					{
						id: action.id,
						question: action.question,
						answer: action.answer,
						choice: action.choice
					}
				]
			};
		default:
			return state
	}

}