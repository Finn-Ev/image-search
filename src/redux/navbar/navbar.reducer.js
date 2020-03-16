const initialState = {
  showMobileNavbar: false
};
export const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_NAVBAR":
      return {
        ...state,
        showMobileNavbar: !state.showMobileNavbar
      };
    case "CLOSE_NAVBAR":
      return {
        ...state,
        showMobileNavbar: false
      };
    default:
      return state;
  }
};
