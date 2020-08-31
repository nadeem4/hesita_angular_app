import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  toggleSidePanel = new Subject<{sidePanelState: string, currentPannel: string}>()

  constructor() { }
}
