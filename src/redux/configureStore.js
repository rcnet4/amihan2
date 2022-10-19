/**
 * Configure additional middleware here
 */
 import { configureStore } from "@reduxjs/toolkit";
 import RootReducer from "./rootReducer";
 
 const ConfigureStore = () => {
   const store = configureStore({
     reducer: RootReducer,
   });
 
   return store;
 };
 
 export default ConfigureStore;
 