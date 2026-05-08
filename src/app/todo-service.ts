import { Injectable } from '@angular/core';
import { ToDo, } from './todo.model';


@Injectable({
  providedIn: 'root',
})
export class TodoService {

  todos: Array<ToDo> = [
    {
      id: 1,
      title: "Wake up",
      description: "Wake up early.",
      status: false
    },
    {
      id: 2,
      title: "Take bath",
      status: false
    },
    {
      id: 3,
      title: "Morning Alignment",
      description:"Clear your workspace and prepare for first study block.",
      status: false
    },

  ]
  getTodos() {
    return this.todos;
  }

  addTask(taskName: string, desc: any) {
    let todo = {
      id: this.todos.length + 1,
      title: taskName,
      description: desc,
      status: false
    }
    this.todos.push(todo)
  }

  toggleCompletion(id: number) {
    const index = this.todos.findIndex(task => task.id === id)
    this.todos[index].status = !this.todos[index].status
  }


  updateTask(id: number, title: string, description: string) {
    const index = this.todos.findIndex(task => task.id === id)
    this.todos[index].title = title;
    this.todos[index].description = description.length !== 0 ? description : "";
  }


  deleteTask(id: number) {
    let index = this.todos.findIndex(task => task.id === id)
    this.todos.splice(index, 1)
  }




}
