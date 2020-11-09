import React, { useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StyleSheet, View, StatusBar } from "react-native"

import { TodoList } from "./src/Components/TodoList/TodoList"

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar backgroundColor="#2e2e2e" barStyle="light-content" />

        <Stack.Navigator
          initialRouteName="TodoList"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="TodoList" component={TodoList} />
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
