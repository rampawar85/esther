import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {
  test : Date = new Date();
  focus;
  focus1;
  constructor() { }

  ngOnInit(): void {
  }

}
