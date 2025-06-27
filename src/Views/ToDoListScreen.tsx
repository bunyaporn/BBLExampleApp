import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import { useToDoViewModel } from '../ViewModels/ToDoItemViewModel';
import ToDoItem from '../Components/ToDoItem';
import CustomButton from '../Components/CustomButton';
import appColors from '../Resources/Colors';
import Spacing from '../Resources/Spacing';

export default function TodoListScreen() {
  const {
    taskItems,
    text: todoText,
    setText: setTodoText,
    addTask,
    toggleCompleted,
  } = useToDoViewModel();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <Text style={styles.header}>My To-Do List</Text>

        {/* ส่วนสำหรับการเพิ่ม Task */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setTodoText}
            value={todoText}
            placeholder="Add a new task..."
            placeholderTextColor={appColors.lightGray}
          />
          <CustomButton
            title="Add Task"
            onPress={addTask}
            buttonColor={appColors.confirmButtonBackground}
          />
        </View>

        {/* รายการ ToDo Items */}
        {taskItems.length > 0 ? (
          <ScrollView style={styles.listContainer}>
            {taskItems.map((item) => (
              <ToDoItem
                key={item.id.toString()}
                item={item}
                onToggle={toggleCompleted}
              />
            ))}
          </ScrollView>
        ) : (
          <Text style={styles.noTasksText}>No tasks!</Text>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
    alignItems: 'center',
    paddingTop: Spacing.large,
  },
  header: {
    fontSize: Spacing.large,
    fontWeight: 'bold',
    marginBottom: Spacing.medium,
    color: appColors.darkGray,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: Spacing.medium,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: appColors.lightGray,
    borderRadius: Spacing.small,
    width: '80%',
    padding: Spacing.small,
    marginBottom: Spacing.medium,
    color: appColors.darkGray,
  },
  buttonMargin: {
    marginBottom: Spacing.medium,
  },
  listContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: Spacing.medium,
  },
  noTasksText: {
    fontSize: Spacing.medium,
    color: appColors.darkGray,
    marginTop: Spacing.medium,
  }
});
