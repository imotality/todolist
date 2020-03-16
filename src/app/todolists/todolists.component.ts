import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrls: ['./todolists.component.scss']
})
export class TodolistsComponent implements OnInit {

  title = 'todo';
  todo: string;
  text: string;
  lists: string[] = [];
  btnAdd:string = "Add";
  i: number;
  addToList(){
    if (this.btnAdd == "Add") {
      this.lists.push(this.todo) ;
      this.todo = "";      
    }
    else 
    this.lists[this.i] = this.todo;
    this.btnAdd = "Add";
    this.todo = "";
  }
  edited (index: number) {
    this.todo = this.lists[index];
    this.btnAdd = "Save";
    this.i = index;
  }
  deleted (index: number) {
    this.lists.splice(index,1);
  }

  ngOnInit(): void {
    
  }

}
