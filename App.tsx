import { useState } from 'react';
import { Keyboard, StyleSheet, Text, View } from 'react-native';
import { COLOURS } from './assets/style/colours';
import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks';
import { Task } from './types/Tasks';

export default function App() {

  const [tasks, setTasks] = useState<Task[]>([])
  
  const addTask = (newTask: string) => {
    Keyboard.dismiss()
    setTasks([...tasks, {content: newTask}])
  }

  const completeTask = (index: number) => {
    let taskCopy = [...tasks];
    taskCopy.splice(index, 1)
    setTasks(taskCopy)
  }

  return (
    <View style={styles.container}>
      <Tasks tasks={tasks} completeTask={completeTask}/>
      <CreateTask addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.bgPrimary,

  },
});
