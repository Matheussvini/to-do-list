import { Component } from '@angular/core';

type Task = {
  description: string;
  done: boolean;
};

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  newToDo: Task = {
    description: '',
    done: false,
  };
  toDoList: Task[] = [];
  countDoneTasks = 0;
  showDoneTasks: boolean = false;

  addToDo() {
    if (this.newToDo.description.trim() !== '') {
      this.toDoList.push({ ...this.newToDo });
      this.newToDo.description = '';
    }
  }

  markTaskDone(task: Task) {
    const index = this.toDoList.indexOf(task);
    if (index !== -1) {
      this.toDoList[index].done = !this.toDoList[index].done;
      this.countDoneTasks += this.toDoList[index].done ? 1 : -1;
    }
  }

  deleteTask(task: Task) {
    const index = this.toDoList.indexOf(task);
    if (index !== -1) {
      if (this.toDoList[index].done) this.countDoneTasks--;
      this.toDoList.splice(index, 1);
    }
  }

  toggleShowDoneTasks() {
    this.showDoneTasks = !this.showDoneTasks;
  }
}
