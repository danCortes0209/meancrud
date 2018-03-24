import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs";

import { Task } from '../Task';

@Injectable()
export class TaskService {
  domain: string = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getTasks(){
    return this.http.get<Task[]>(`${this.domain}api/tasks`).map(res => res);
  }

  addTask(newTask: Task){
    return this.http.post(`${this.domain}api/tasks`,newTask).map(res => res);
  }

  deleteTask(id){
    return this.http.delete(`${this.domain}api/tasks/${id}`).map(res => res);
  }

  updateTask(newTask: Task, id){
    return this.http.put(`${this.domain}api/tasks/${id}`, newTask).map(res => res);
  }

}
