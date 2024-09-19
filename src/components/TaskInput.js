import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './styles/taskInputStyles';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
};

export default TaskInput;
