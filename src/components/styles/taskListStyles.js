
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop : 10,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    padding: 10,
    color: '#000',

  },
  checkbox: {
    marginRight: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#000'
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
    checkboxImage: {
      width: 24, 
      height: 24, 
    },
    deleteImage: {
      width: 24, 
      height: 24, 
      marginLeft: 'auto', 
    },
});


