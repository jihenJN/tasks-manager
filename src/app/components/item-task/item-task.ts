import { Component, computed, inject, input } from '@angular/core';
import { TaskItem } from '../../models/task-item.model';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-item-task',
  imports: [],
  templateUrl: './item-task.html',
  styleUrl: './item-task.css',
})
export class ItemTask {
task=input.required<TaskItem>()
statusValues =['todo','inprogress','completed']
taskService=inject(TaskService);
actions=computed(()=>{
  const taskValue = this.task()
  return this.statusValues.filter((el)=>taskValue.status !==el)
})

markAs(text:string,action:string){
  this.taskService.markAsStatus(text,action)
}
}
