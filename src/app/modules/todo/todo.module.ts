import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EntityDataService } from '@ngrx/data';

import { TodoWidgetComponent } from './widgets/todo-widget/todo-widget.component';
import { TodoDataService } from './store/entity/todo-data.service';

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
  ],
  providers: [TodoDataService]
})
export class TodoModule { 
    constructor(
        entityDataService: EntityDataService,
        todoDataService: TodoDataService,
  ) {
        entityDataService.registerService('Todo', todoDataService);
  }
}
