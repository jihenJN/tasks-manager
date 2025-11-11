import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  taskForm = new FormGroup({
    task: new FormControl('', { nonNullable: true }),
    status: new FormControl('todo', { nonNullable: true }),
  });

  onSubmit(){
    console.log(this.taskForm.getRawValue())
  }
}
