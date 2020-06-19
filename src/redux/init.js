import { createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import reducer from "./reducer";
import middleware from "./middleware";

const persistConfig = {
    key: "root",
    storage,
    blacklist: []
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export { store, persistor };
