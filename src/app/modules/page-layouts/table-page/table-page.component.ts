import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {

  public data =[
	{type: "sometype", username: "username", system:"system" },
	{type: "sometype", username: "username", system:"system" },
	{type: "sometype", username: "username", system:"system" },
	{type: "sometype", username: "username", system:"system" },
	{type: "sometype", username: "username", system:"system" },
	{type: "sometype", username: "username", system:"system" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
