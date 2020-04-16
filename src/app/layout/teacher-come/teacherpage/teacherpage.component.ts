import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacherpage',
  templateUrl: './teacherpage.component.html',
  styleUrls: ['./teacherpage.component.scss']
})
export class TeacherpageComponent implements OnInit {
  index: number = 0;
  constructor() { }
  openNext() {
    this.index = (this.index === 6) ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = (this.index === 0) ? 6 : this.index - 1;
  }
  ngOnInit() {
  }

}
