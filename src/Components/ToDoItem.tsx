import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacing from '../Resources/Spacing';
import Colors from '../Resources/Colors';
import { ToDo } from '../Models/TaskModel';

interface ToDoItemProps {
  item: ToDo;
  onToggle: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ item, onToggle }) => {
  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        { backgroundColor: item.completed ? Colors.lightGray : Colors.white },
        item.completed && styles.completedItem,
      ]}
      onPress={() => onToggle(item.id)}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.itemText,
          { color: Colors.darkGray },
          item.completed && styles.completedText,
        ]}
      >
        {item.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.large,
    borderRadius: Spacing.small,
    marginVertical: Spacing.extraSmall,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Colors.lightGray,
  },
  completedItem: {
    borderColor: Colors.confirmButtonBackground
  },
  itemText: {
    fontSize: Spacing.medium,
    fontWeight: 'normal',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: Colors.darkGray,
  },
});

export default ToDoItem;
