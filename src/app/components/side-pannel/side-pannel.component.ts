import { Component, OnInit, Renderer2 } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-side-pannel',
  templateUrl: './side-pannel.component.html',
  styleUrls: ['./side-pannel.component.scss'],
})
export class SidePannelComponent implements OnInit {
  opneLocationPanel: boolean = false;
  openSearchPanel: boolean = false;
  openSidePanel: boolean = false;
  constructor(private renderer: Renderer2, private homeService: HomeService) {}

  ngOnInit(): void {
    this.toggleSidePanel()
  }

  toggleSidePanel() {
    this.homeService.toggleSidePanel.subscribe((res) => {
      if (
        res.currentPannel === 'locationPanel' &&
        res.sidePanelState === 'open'
      ) {
        this.opneLocationPanel = true;
        this.openSearchPanel = false;
        this.openSidePanel = true;
      } else if (
        res.currentPannel === 'locationPanel' &&
        res.sidePanelState === 'close'
      ) {
        this.opneLocationPanel = false;
        this.openSearchPanel = false;
        this.openSidePanel = false;
      } else if (
        res.currentPannel === 'searchPanel' &&
        res.sidePanelState === 'open'
      ) {
        this.openSearchPanel = true;
        this.opneLocationPanel = false;
        this.openSidePanel = true;
      } else if (
        res.currentPannel === 'searchPanel' &&
        res.sidePanelState === 'close'
      ) {
        this.openSearchPanel = false;
        this.opneLocationPanel = false;
        this.openSidePanel = false;
      }
    });
  }
}
