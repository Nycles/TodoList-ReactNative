import React from "react"
import { StyleSheet, FlatList } from "react-native"
import Task from "./Task/Task"

const TaskList = (props) => {
  const tasks = [
    { id: 1, title: "To do my homework", completed: false },
    { id: 2, title: "Learn new framework", completed: false },
    {
      id: 3,
      title:
        "Internal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.",
      completed: false,
    },
  ]

  const renderItem = ({ item, index }) => {
    return <Task title={item.title} />
  }

  return (
    <FlatList
      style={styles.taskList}
      data={tasks}
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
