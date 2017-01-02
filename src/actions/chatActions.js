import * as types from './actionTypes';


export function updatemessagelist(id, question, answer, choice){
	return {
		type: types.UPDATEMESSAGELIST,
		id,
		question,
		answer,
		choice

	}
}