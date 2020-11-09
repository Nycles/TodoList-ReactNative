import React, { useRef } from "react"
import {
  StyleSheet,
  View,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  Image,
} from "react-native"

export const CreateItem = (props) => {
  let textInput = useRef(null)

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
        <View style={styles.modalHeader}></View>
        <TouchableWithoutFeedback onPress={() => props.setModalOpen(false)}>
          <View style={styles.modalBlur}></View>
        </TouchableWithoutFeedback>
        <View style={styles.addTaskBlock}>
          <TextInput
            ref={(input) => {
              textInput = input
            }}
            placeholder="Чем бы Вы хотели заняться?"
            maxLength={300}
            multiline={true}
            textAlignVertical="center"
            numberOfLines={1}
            style={styles.input}
          />
          <View style={styles.sendWrapper}>
            <Image
              style={{ width: 28, height: 28 }}
              source={require("../../../../assets/send.png")}
            />
          </View>
        </View>
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
    height: 50,
    backgroundColor: "#2e2e2e",
  },
  modalBlur: {
    flexGrow: 1,
    backgroundColor: "black",
    opacity: 0.3,
    justifyContent: "flex-end",
  },
  addTaskBlock: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    maxHeight: 58,
    flexGrow: 1,
    width: "90%",
    fontSize: 16,
  },
  sendWrapper: {
    marginLeft: 10,
  },
})
