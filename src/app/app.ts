import { TaskService } from './services/task-service';
import { Component, computed, inject, signal } from '@angular/core';
import { TaskForm } from './components/task-form/task-form';
import { TaskList } from './components/task-list/task-list';


@Component({
  selector: 'app-root',
  imports: [TaskForm,TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  taskService = inject(TaskService)
  tasks=this.taskService.tasks

  todoItems = computed(()=>{
    const tasks=this.tasks();
    return tasks.filter((el)=>el.status==='todo')
  })

  inProgressItems=computed(()=>{
     const tasks=this.tasks();
    return tasks.filter((el)=>el.status==='inprogress')
  })

   CompletedItems=computed(()=>{
     const tasks=this.tasks();
    return tasks.filter((el)=>el.status==='completed')
  })

}
