import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StyleSheet, View, StatusBar } from "react-native"

import TodoList from "./src/components/TodoList/TodoList"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import reduxStore from "./src/redux/store"
import TaskPage from "./src/components/TaskPage/TaskPage"

export default function App() {
  const { store, persistor } = reduxStore()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigators />
      </PersistGate>
    </Provider>
  )
}

const Navigators = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar backgroundColor="#2e2e2e" barStyle="light-content" />

        <Stack.Navigator initialRouteName="TodoList" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TodoList" component={TodoList} />
          <Stack.Screen name="TaskPage" component={TaskPage} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
