const initalState = {
	imageAmount: 25,
	queryString: '',
	queryInfo: "",
};

export const searchImagesReducer = (state = initalState, action) => {
	switch (action.type) {
		case 'SET_IMAGE_AMOUNT':
			return {
				...state,
				imageAmount: action.payload,
			};
		case 'SET_QUERY_STRING':
			return {
				...state,
				queryString: action.payload,
			};
		case 'SET_QUERY_INFO':
			return {
				...state,
				queryInfo: action.payload, 
			};
		default:
			return state;
	}
};
