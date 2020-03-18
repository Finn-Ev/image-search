import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { favouriteImagesReducer } from "./favouriteImages/favouriteImages.reducer";
import { searchImagesReducer } from "./searchImages/searchImages.reducer"
import { navbarReducer } from "./navbar/navbar.reducer"
import { modalReducer } from "./modal/modal.reducer"


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["favouriteImages"]
  };
  

 const rootReducer = combineReducers({
    favouriteImages: favouriteImagesReducer,
    searchImages: searchImagesReducer,
    navbar: navbarReducer,
    modal: modalReducer
})

export default persistReducer(persistConfig, rootReducer)
