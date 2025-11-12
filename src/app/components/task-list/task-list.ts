import { Component, input } from '@angular/core';
import { TaskItem } from '../../models/task-item.model';
import { ItemTask } from '../item-task/item-task';


@Component({
  selector: 'app-task-list',
  imports: [ItemTask],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {

  heading = input.required<string>()
  tasks = input.required<TaskItem[]>()
}
