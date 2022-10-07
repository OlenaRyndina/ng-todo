import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TodoWidgetComponent } from './widgets/todo-widget/todo-widget.component';



@NgModule({
  declarations: [
    TodoWidgetComponent
  ],
  exports: [
    TodoWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class TodoModule { }
