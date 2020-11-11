import React, { useRef } from "react"
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Image,
} from "react-native"
import { Formik } from "formik"

import { AntDesign } from "@expo/vector-icons"

export const CreateTask = (props) => {
  let textInput = useRef(null)

  const createTask = async (values) => {
    if (values.title) {
      try {
        await props.addTask(values.title)
        props.setModalOpen(false)
      } catch {
        alert("error create task")
      }
    }
  }

  // const handleKeyPress = ({ nativeEvent: { key: keyValue } }, title) => {
  //   if (keyValue === "Enter") {
  //     createTask(title)
  //   }
  // }

  return (
    <Modal
      onShow={() => textInput.focus()}
      animationType="fade"
      transparent={true}
      presentationStyle="overFullScreen"
      visible={props.modalOpen}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.")
      }}
    >
      <View style={styles.modalWrapper}>
        <View style={styles.modalHeader}>
          <TouchableHighlight
            style={styles.closeButton}
            underlayColor="#4C4C4C"
            onPress={() => props.setModalOpen(false)}
          >
            <AntDesign name="close" size={24} color="#fff" />
          </TouchableHighlight>
        </View>

        <TouchableWithoutFeedback onPress={() => props.setModalOpen(false)}>
          <View style={styles.modalBlur}></View>
        </TouchableWithoutFeedback>

        <Formik initialValues={{ title: "" }} onSubmit={createTask}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.form}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  value={values.title}
                  onChangeText={handleChange("title")}
                  onBlur={handleBlur("title")}
                  ref={(input) => {
                    textInput = input
                  }}
                  placeholder="Чем бы Вы хотели заняться?"
                  maxLength={300}
                  multiline={true}
                  textAlignVertical="center"
                  numberOfLines={1}
                />
              </View>
              <TouchableHighlight
                style={styles.sendButton}
                underlayColor="#E1E1E1"
                disabled={values.title ? false : true}
                onPress={handleSubmit}
              >
                <Image style={{ width: 28, height: 28 }} source={require("../../../../assets/send.png")} />
              </TouchableHighlight>
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: "space-between",
  },
  modalHeader: {
    width: "100%",
    height: 56,
    backgroundColor: "#2e2e2e",
  },
  closeButton: {
    width: 56,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  modalBlur: {
    flexGrow: 1,
    backgroundColor: "black",
    opacity: 0.3,
    justifyContent: "flex-end",
  },
  form: {
    width: "100%",
    maxHeight: 88,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputWrapper: {
    width: "80%",
    padding: 15,
    flexGrow: 1,
  },
  input: {
    maxHeight: 58,
    fontSize: 16,
  },
  sendButton: {
    width: 58,
    height: 58,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
})
