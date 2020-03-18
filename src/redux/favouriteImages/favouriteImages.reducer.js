import { handleToggleFavouriteImage } from "./favouriteImages.utils";

const initalState = {
	imageIDs: [],
};

export const favouriteImagesReducer = (state = initalState, action) => {
	switch (action.type) {
		case "TOGGLE_FAVOURITE_IMAGE":
			return {
				...state,
				imageIDs: handleToggleFavouriteImage(state.imageIDs, action.payload)
			}
		default:
			return state;
	}
};
