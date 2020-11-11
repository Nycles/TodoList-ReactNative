import React from "react"
import { StyleSheet, Text, View } from "react-native"

const TaskPage = ({ route }) => {
  const title = route.params.title

  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
    </View>
  )
}

export default TaskPage

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
