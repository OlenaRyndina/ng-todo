import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  EntityCollectionDataService,
  DefaultDataServiceConfig,
  DefaultDataService,
  HttpUrlGenerator,
  QueryParams
} from '@ngrx/data';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from '../../models/todo';

@Injectable()
export class TodoDataService extends DefaultDataService<Todo> {
  constructor(
      http: HttpClient, 
      httpUrlGenerator: HttpUrlGenerator,
      defaultDataServiceConfig: DefaultDataServiceConfig) {
    super('Todo', http, httpUrlGenerator, defaultDataServiceConfig);
  }

  override getWithQuery(params: string | QueryParams): Observable<Todo[]> {
    return super.getWithQuery(params)
        .pipe(
            map((response: any) => {
                return response.data ? response.data : response;
            })
        );
  }
}