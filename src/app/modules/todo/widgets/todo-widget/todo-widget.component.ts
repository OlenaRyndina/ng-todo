import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../../../../todo';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css']
})
export class TodoWidgetComponent implements OnInit {
    public title = '';

    public todoList?: Todo[];
    constructor(private httpClient: HttpClient) {

    }  

    ngOnInit(): void {
        this.httpClient.get<Todo[]>(
            'http://localhost:3000/rest/todo'
        ).subscribe(todoList => {
                this.todoList = todoList;
        })
    }

    onCreate(): void {
        if(this.title) {
            this.httpClient.post<Todo>(
                'http://localhost:3000/rest/todo',
                {
                    title: this.title
                }
            ).subscribe(todo => {
                this.todoList.push(todo);
            })
            this.title = '';
        }
    }

    onComplete(todo: Todo) {
       this.httpClient.patch<Todo>(
            `http://localhost:3000/rest/todo/${todo.id}`,
            {
              isCompleted: !todo.isCompleted
            }
        ).subscribe((updateTodo) => {
            this.todoList = this.todoList.map(todo => todo.id !== updateTodo.id ? todo : updateTodo)
        })
    }

    onRemove(todo): void {
        this.httpClient.delete<Todo>(
            `http://localhost:3000/rest/todo/${todo.id}`
        ).subscribe(() => {
            this.todoList = this.todoList.filter(todoItem => todoItem.id !== todo.id)
        })
    }

}
