import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private _Router:Router){}
toDoList:any=[]

list:FormGroup = new FormGroup({
    name: new FormControl('',Validators.required)
  })
ngOnInit(): void {
  const savedList = localStorage.getItem('toDoList');
  if (savedList) {
    this.toDoList = JSON.parse(savedList);
  }
  
}
  addToList(){
this.toDoList.push(this.list.value)
this.saveToDoList()

  }

  deleteFromList(index: number) {
    this.toDoList.splice(index, 1);
    this.saveToDoList()

  }

  clearList() {
    this.toDoList = [];
    this.saveToDoList()
  }

   saveToDoList() {
    localStorage.setItem('toDoList', JSON.stringify(this.toDoList));
  }

  logout(){
    localStorage.removeItem('login')
    this._Router.navigate(["/login"])
  }
}
