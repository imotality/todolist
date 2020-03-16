import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todocomponent',
  templateUrl: './todocomponent.component.html',
  styleUrls: ['./todocomponent.component.scss']
})
export class TodocomponentComponent implements OnInit {

  @Input() items:string;
  @Output() edited = new EventEmitter();
  @Output() deleted = new EventEmitter();
  isDeleted () {
    this.deleted.emit();
  }
  isEdited() {
    this.edited.emit();
  }

  isGood = false;
    checked () {
      if (this.isGood) 
      this.isGood = false;
      else 
      this.isGood = true;
}
  

  constructor() { }

  ngOnInit(): void {
  }

}
