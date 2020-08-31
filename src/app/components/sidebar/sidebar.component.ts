import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../shared/services/home.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  currentPanel: string = '';
  LOCALTION_PANEL = 'locationPanel';
  SEARCH_PANEL = 'searchPanel';
  OPEN = 'open';
  CLOSE = 'close';
  sidePanelState: string = this.CLOSE;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.toggleSidePanel.next({
      sidePanelState: this.sidePanelState,
      currentPannel: this.currentPanel,
    });
  }

  toggleLocationPannel() {
    if (
      this.currentPanel === this.LOCALTION_PANEL &&
      this.sidePanelState == this.OPEN
    ) {
      this.sidePanelState = this.CLOSE;
    } else if (
      this.currentPanel == this.LOCALTION_PANEL &&
      this.sidePanelState == this.CLOSE
    ) {
      this.sidePanelState = this.OPEN;
    } else if (this.currentPanel != this.LOCALTION_PANEL) {
      this.sidePanelState = this.OPEN;
    }

    this.currentPanel = this.LOCALTION_PANEL;
    this.homeService.toggleSidePanel.next({
      sidePanelState: this.sidePanelState,
      currentPannel: this.currentPanel,
    });
  }

  toggleSearchPannel() {
    if (
      this.currentPanel === this.SEARCH_PANEL &&
      this.sidePanelState === this.OPEN
    ) {
      this.sidePanelState = this.CLOSE;
    } else if (
      this.currentPanel == this.SEARCH_PANEL &&
      this.sidePanelState === this.CLOSE
    ) {
      this.sidePanelState = this.OPEN;
    } else if (this.currentPanel != this.SEARCH_PANEL) {
      this.sidePanelState = this.OPEN;
    }

    this.currentPanel = this.SEARCH_PANEL;
    this.homeService.toggleSidePanel.next({
      sidePanelState: this.sidePanelState,
      currentPannel: this.currentPanel,
    });
  }
}
