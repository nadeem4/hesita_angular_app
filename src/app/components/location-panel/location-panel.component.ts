import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-location-panel',
  templateUrl: './location-panel.component.html',
  styleUrls: ['./location-panel.component.scss']
})
export class LocationPanelComponent implements OnInit {

  @ViewChildren('tabs', {read: ElementRef}) tabs: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

}
