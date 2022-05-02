import { legacy_createStore as createStore } from "redux"; //Debido a la instalación de reduxjs/toolkit. Es una versión mejorada que hay que investigar después del bootcamp.
//import { createStore } from "redux";
import rootReducer from "./reducer";

export default createStore(rootReducer);
