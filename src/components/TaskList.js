
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles/taskListStyles'; // Import your styles

const TaskList = ({ task, toggleCompleteTask, deleteTask }) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => toggleCompleteTask(task.id)}
      >
        <Image
          source={task.completed ? require('../assests/checkbox.png') : require('../assests/uncheckbox.png')}
          style={styles.checkboxImage}
        />
      </TouchableOpacity>
      <Text style={[styles.taskText, task.completed && styles.completedTask]}>
        {task.text}
      </Text>
      <TouchableOpacity onPress={() => deleteTask(task.id)}>
        <Image
          source={require('../assests/delete.png')}
          style={styles.deleteImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TaskList;

