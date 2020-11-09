import React from "react"
import { StyleSheet, Text, View, TouchableHighlight } from "react-native"
import CheckBox from "@react-native-community/checkbox"

const Task = (props) => {
  return (
    <TouchableHighlight
      underlayColor={"#E7E7E7"}
      onPress={() => alert("Нажато!")}
      style={styles.taskWrapper}
    >
      <View style={styles.task}>
        <CheckBox style={styles.checkbox} />
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
