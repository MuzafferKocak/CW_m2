import { legacy_createStore as createStore } from "redux";
import { counterReducer } from "./counterReducer";

//? Store'un oluşturulması
export const store = createStore(counterReducer);
