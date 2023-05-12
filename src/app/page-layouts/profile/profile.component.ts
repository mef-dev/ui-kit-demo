import { Component, OnInit, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ContentChild("first_colum") first_colum: TemplateRef<void>; 
  @ContentChild("second_colum") second_colum: TemplateRef<void>; 
  @ContentChild("footer") footer: TemplateRef<void>; 

  @Input() name:string;
  @Input() img: string = '';
  @Input() shortDescription: string;
  @Input() header: string;
  @Input() circleImg: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.header = "servise details",
    this.name = "servise name"
    this.shortDescription = "servise short description"
  }
 }
