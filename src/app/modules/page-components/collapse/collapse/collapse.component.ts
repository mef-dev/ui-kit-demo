import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'lib-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {
  entity:[
  id: string,
	createdBy: string,
	creationDate:Date,
	email: string,
	firstName: string,
	displayName:string,
	hasPassword: boolean,
	isActivated:boolean,
	lastActivity: Date,
	lastName: string,
	organizationId: any,
	organizationIds: any[],
	organizations: [],
	organizationName: string,
	roles: any, // todo
	phone: string,
	pictureUrl: string,
	pin: string,
	pinConfirm: string,
	qtyServices: number,
	referralLink: string,
	role: string,
	system: string,
	sysUser: boolean,
	userName: string,
	userNameString: string,
	winuser: string,
	winUserName: string,
	referralPhone: string,
  ]

  fragment: string;

  constructor() { }

  ngOnInit(): void {
  }
  referralLinkSend(refferalEmails:string, refferalMsg:string, refferalCB:boolean){

  }
  referralLinkCopy(){

  }
}
