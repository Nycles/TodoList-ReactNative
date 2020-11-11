import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { CreateTask } from "./CreateTask/CreateTask"
import { Keyboard } from "react-native"
import TaskList from "./TaskList/TaskList"
import { connect } from "react-redux"

import { addTask, removeTask, updateCompletedTask } from "../../redux/reducers/tasksReducer"

const TodoList = (props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [keyboardOpen, setKeyboardOpen] = useState(false)

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", (e) => {
      setKeyboardOpen(true)
    })
    Keyboard.addListener("keyboardDidHide", (e) => {
      setKeyboardOpen(false)
    })
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow")
      Keyboard.removeAllListeners("keyboardDidHide")
    }
  }, [])

  return (
    <View style={styles.container}>
      <CreateTask modalOpen={modalOpen} setModalOpen={setModalOpen} addTask={props.addTask} />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Todo List</Text>
      </View>

      <View style={styles.main}>
        <TaskList
          navigation={props.navigation}
          tasks={props.tasks}
          removeTask={props.removeTask}
          updateCompletedTask={props.updateCompletedTask}
        />
      </View>

      <View style={styles.footer}>
        {keyboardOpen ? null : modalOpen ? null : (
          <TouchableOpacity onPress={() => setModalOpen(true)} activeOpacity={0.4}>
            <View style={styles.button}>
              <Text style={{ color: "#fff", fontSize: 30 }}>+</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 56,
    backgroundColor: "#2e2e2e",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  main: {
    flexGrow: 1,
  },
  footer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  button: {
    width: 60,
    height: 60,
    padding: 10,
    backgroundColor: "#FFB45A",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
})

mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  }
}

export default connect(mapStateToProps, { addTask, removeTask, updateCompletedTask })(TodoList)
