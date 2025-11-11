import { Component, inject } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/task-service';
@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  taskService = inject(TaskService)
  taskForm = new FormGroup({
    task: new FormControl('', { nonNullable: true }),
    status: new FormControl('todo', { nonNullable: true }),
  });

  onSubmit(){
    const rawValue=this.taskForm.getRawValue();
    this.taskService.addTask(rawValue.task,rawValue.status);
    this.taskForm.reset();
  }
}
