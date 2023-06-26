import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public breadcrumbList: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
}
