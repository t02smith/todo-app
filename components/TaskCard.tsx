import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Task } from '../types/Tasks'
import { COLOURS } from '../assets/style/colours'


const TaskCard = ({content}: Task) => {
  return (
    <View style={styles.task}>
			<View style={styles.itemsLeft}>
				<View style={styles.square} />
				<Text style={styles.taskText}>{content}</Text>
			</View>
      <View style={styles.circular}/>
    </View>
  )
}

const styles = StyleSheet.create({
    task: {
			backgroundColor: COLOURS.bgSecondary,
			padding: 15,
			borderRadius: 10,
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			marginBottom: 20
    },
		itemsLeft: {
			flexDirection: "row",
			alignItems: "center",
			flexWrap: "wrap",
		},
		square: {
			width: 24,
			height: 24,
			backgroundColor: COLOURS.bgTertiray,
			opacity: 0.4,
			borderRadius: 5,
			marginRight: 15
		},
		taskText: {
			maxWidth: "80%"
		},
		circular: {
			width: 12,
			height: 12,
			borderColor: COLOURS.bgTertiray,
			borderWidth: 2,
			borderRadius: 5
		}
})

export default TaskCard