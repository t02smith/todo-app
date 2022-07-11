import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Task } from '../types/Tasks'
import TaskCard from './TaskCard'

type TasksProps = {
	tasks: Task[]
	completeTask(index: number): void
}

const Tasks = ({ tasks, completeTask }: TasksProps) => {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>Today's Tasks</Text>
			<View style={styles.items}>
				{tasks.length > 0
				?
					tasks.map((t, i) => (
						<TouchableOpacity onPress={() => completeTask(i)}>
							<TaskCard content={t.content} key={i} />
						</TouchableOpacity>
					))
				: <Text style={{fontStyle: "italic", opacity: 0.6}}>Add a task now...</Text>
				}
			</View>
		</View>
	)
}

export default Tasks

const styles = StyleSheet.create({
	wrapper: {
		paddingTop: 80,
		paddingHorizontal: 20
	},
	title: {
		fontSize: 30,
		textAlign: "center",
		fontWeight: "bold"
	},
	items: {
		marginTop: 20
	}
})