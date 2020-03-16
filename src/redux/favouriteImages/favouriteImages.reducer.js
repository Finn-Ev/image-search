const initalState = {
	imageIDs: [],
};

export const favouriteImagesReducer = (state = initalState, action) => {
	switch (action.type) {
		case 'ADD_TO_FAVOURITE_IMAGES':
			return {
				...state,
				imageIDs: [...state.imageIDs, action.payload],
			};
		case 'REMOVE_FROM_FAVOURITE_IMAGES':
			return {
				...state,
				imageIDs: state.imageIDs.filter(imageID => imageID !== action.payload),
			};
		case 'SET_IMAGE_AMOUNT':
		default:
			return state;
	}
};
