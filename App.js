//import React, { useState } from 'react';
//import { View, SafeAreaView, FlatList } from 'react-native';
//import 'react-native-vector-icons/MaterialIcons';
//import TaskInput from './src/components/TaskInput';
//import TaskList from './src/components/TaskList';
//import { styles } from './appStyles';
//
//const App = () => {
//  const [tasks, setTasks] = useState([]);
//
//  const addTask = (task) => {
//    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
//  };
//
//  const toggleCompleteTask = (taskId) => {
//    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
//  };
//
//  const deleteTask = (taskId) => {
//    setTasks(tasks.filter(task => task.id !== taskId));
//  };
//
//  return (
//    <SafeAreaView style={styles.container}>
//      <TaskInput addTask={addTask} />
//      <FlatList
//        data={tasks}
//        renderItem={({ item }) => (
//          <TaskList task={item} toggleCompleteTask={toggleCompleteTask} deleteTask={deleteTask} />
//        )}
//        keyExtractor={item => item.id.toString()}
//      />
//    </SafeAreaView>
//  );
//};
//
//export default App;


import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskInput from './src/components/TaskInput';
import TaskList from './src/components/TaskList';
import { styles } from './appStyles';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from AsyncStorage when the app starts
    const loadTasks = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem('tasks');
        if (savedTasks) {
          setTasks(JSON.parse(savedTasks));
        }
      } catch (e) {
        console.error('Failed to load tasks:', e);
      }
    };

    loadTasks();
  }, []);

  const saveTasks = async (newTasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
    } catch (e) {
      console.error('Failed to save tasks:', e);
    }
  };

  const addTask = (task) => {
    const newTasks = [...tasks, { id: Date.now(), text: task, completed: false }];
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const toggleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TaskInput addTask={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskList task={item} toggleCompleteTask={toggleCompleteTask} deleteTask={deleteTask} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default App;
