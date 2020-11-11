import React from "react"
import { StyleSheet, FlatList } from "react-native"
import Task from "./Task/Task"

const TaskList = (props) => {
  const renderItem = ({ item, index }) => {
    return (
      <Task
        navigation={props.navigation}
        id={index}
        completed={item.completed}
        title={item.title}
        removeTask={props.removeTask}
        updateCompletedTask={props.updateCompletedTask}
      />
    )
  }

  return (
    <FlatList
      style={styles.taskList}
      data={props.tasks}
      renderItem={renderItem}
      keyExtractor={(item, index) => String(index)}
    />
  )
}

export default TaskList

const styles = StyleSheet.create({
  taskList: {
    marginTop: 10,
  },
})
