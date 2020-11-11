import { createStore } from "redux"
import { persistReducer, persistStore } from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"

import tasksReducer from "./reducers/tasksReducer"

const persistConfig = {
  key: "tasks",
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, tasksReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
