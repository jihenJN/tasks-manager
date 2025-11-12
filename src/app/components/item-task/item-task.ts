import { Component, computed, input } from '@angular/core';
import { TaskItem } from '../../models/task-item.model';

@Component({
  selector: 'app-item-task',
  imports: [],
  templateUrl: './item-task.html',
  styleUrl: './item-task.css',
})
export class ItemTask {
task=input.required<TaskItem>()
statusValues =['todo','inprogress','completed']
actions=computed(()=>{
  const taskValue = this.task()
  return this.statusValues.filter((el)=>taskValue.status !==el)
})
}
