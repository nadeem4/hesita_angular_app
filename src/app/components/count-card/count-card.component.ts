import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-card',
  templateUrl: './count-card.component.html',
  styleUrls: ['./count-card.component.scss']
})
export class CountCardComponent implements OnInit {
  @Input() title: string;
  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
