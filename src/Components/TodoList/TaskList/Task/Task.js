import React from "react"
import { StyleSheet, Text, View, TouchableHighlight } from "react-native"
import CheckBox from "@react-native-community/checkbox"

const Task = (props) => {
  return (
    <TouchableHighlight
      style={styles.taskWrapper}
      underlayColor={"#E7E7E7"}
      onPress={() => props.navigation.navigate("TaskPage", { title: props.title })}
      onLongPress={() => props.removeTask(props.id)}
    >
      <View style={styles.task}>
        <CheckBox
          style={styles.checkbox}
          disabled={false}
          value={props.completed}
          onValueChange={(newValue) => props.updateCompletedTask(newValue, props.id)}
        />
        <Text style={styles.title} numberOfLines={1}>
          {props.title}
        </Text>
      </View>
    </TouchableHighlight>
  )
}

export default Task

const styles = StyleSheet.create({
  taskWrapper: {
    width: "100%",
    padding: 15,
  },
  task: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 10,
  },
  title: {
    fontFamily: "Roboto",
    maxWidth: "90%",
    fontSize: 16,
  },
})
