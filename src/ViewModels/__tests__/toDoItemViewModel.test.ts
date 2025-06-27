import { renderHook, act } from '@testing-library/react-hooks';
import { toDoItemViewModel } from '../ToDoItemViewModel';

describe('homeViewModel', () => {
  test('should add a new task when addTask is called with non-empty text', () => {
    const { result } = renderHook(() => toDoItemViewModel());

    act(() => {
      result.current.setText('Buy groceries');
    });

    act(() => {
      result.current.addTask();
    });

    expect(result.current.taskItems).toEqual([
      { id: 1, text: 'Doctor Appointment', completed: true },
      { id: 2, text: 'Meeting at School', completed: false }
    ]);
    expect(result.current.text).toBe('');
  });
})