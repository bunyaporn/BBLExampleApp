import { useState, useCallback } from 'react';

import { ToDo } from '../Models/TaskModel';

export interface ToDoViewModel {
  taskItems: ToDo[];
  text: string;
  setText: (text: string) => void;
  addTask: () => void;
  toggleCompleted: (id: number) => void;
}

export const useToDoViewModel = (): ToDoViewModel => {
  const [taskItems, setTasks] = useState<ToDo[]>([
    { id: 1, text: 'Doctor Appointment', completed: true },
    { id: 2, text: 'Meeting at School', completed: false }
  ]);
  const [text, setText] = useState('');

  const addTask = useCallback(() => {
    if (text.trim() === '') {
      return;
    }
    const newTask: ToDo = { id: Date.now(), text, completed: false };
    setTasks(prevTasks => [...prevTasks, newTask]);
    setText('');
  }, [text]);

  const toggleCompleted = useCallback((id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }, []);

  return {
    taskItems,
    text,
    setText,
    addTask,
    toggleCompleted,
  };
};
