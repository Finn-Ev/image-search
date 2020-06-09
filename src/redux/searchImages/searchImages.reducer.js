export const imageAmountReducer = (state = 25, action) => {
  switch (action.type) {
    case "SET_IMAGE_AMOUNT":
      return action.payload;
    default:
      return state;
  }
};
