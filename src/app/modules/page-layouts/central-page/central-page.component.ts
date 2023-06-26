import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-central-page',
  templateUrl: './central-page.component.html',
  styleUrls: ['./central-page.component.scss']
})
export class CentralPageComponent implements OnInit {
  text = `api-unavailable-text`;
  routes = [
    {
      label: "Notifications",
      routerLink: "/app",
    }
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
