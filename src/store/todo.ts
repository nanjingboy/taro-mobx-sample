import { observable, computed, action } from 'mobx'
import { createContext } from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

class TodoStore {
  @observable todos: Todo[] = []

  @computed get total() {
    return this.todos.length
  }

  @computed get completedCount() {
    return this.todos.filter(item => item.completed).length
  }

  @action.bound
  add() {
    const id = this.todos.length + 1;
    this.todos.push({
      id,
      title: `Item ${id}`,
      completed: false
    })
  }

  @action.bound
  toggle(index) {
    this.todos[index].completed = !this.todos[index].completed
  }
}

export default createContext(new TodoStore())