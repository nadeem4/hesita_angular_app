import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = "Location Master Data Management"
  appName: string = 'Hestia'
  username: string
  role: string

  constructor() { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.role =  localStorage.getItem('role');

  }

}
