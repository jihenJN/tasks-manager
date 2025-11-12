import { Injectable, signal } from '@angular/core';
import { TaskItem } from '../models/task-item.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<TaskItem[]>([]);

  addTask(task: string, status: string) {
    this.tasks.update((previousState) => {
      return [...previousState, { task, status }];
    });
  }

  markAsStatus(text: string, updatedStatus: string){
    this.tasks.update((existingCollection)=>{
     const taskExists= existingCollection.find((x)=>x.task===text)
      if(taskExists){
        return  [...existingCollection.filter((x)=>x.task !== text), {task:text, status:updatedStatus}]
      }
        return existingCollection

    })
  }
}

