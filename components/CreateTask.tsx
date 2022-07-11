import { View, Text, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { isWhiteSpaceLike } from 'typescript'
import { COLOURS } from '../assets/style/colours'

type CreateTaskProps = {
    addTask(newTask: string): void
}

const CreateTask = ({ addTask }: CreateTaskProps) => {

	const [task, setTask] = useState<string>("")

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding": "height"}
        style={styles.writeTaskWrapper}
    >
      <TextInput
        style={styles.input}
        placeholder="Add a task"
				onChangeText={txt => setTask(txt)}
				value={task}
				onEndEditing={() => {addTask(task); setTask("")}}
      />

      <TouchableOpacity 
				onPress={() => {addTask(task); setTask("")}}>
        <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default CreateTask

const styles = StyleSheet.create({
    writeTaskWrapper: {
        position: "absolute",
        bottom: 30,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: COLOURS.bgSecondary,
        borderRadius: 60,
        borderColor: "#c0c0c0",
        borderWidth: 1,
        width: 270,
				marginRight: 10
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "#0180ff",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center", 	
    },
    addText: {
			color: "white",
			fontWeight: "bold",
			fontSize: 30
    }
})