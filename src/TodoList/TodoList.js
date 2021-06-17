import React from 'react';
import { useRecoilValue } from 'recoil';

import { filteredTodoListState } from './state';
import { TodoListStats } from './TodoListStats';
import { TodoListFilters } from './TodoListFilters';
import { TodoItemCreator } from './TodoItemCreator';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
