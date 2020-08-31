import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { CountCardComponent } from './count-card/count-card.component';
import { RecentlyUpdatedLocationsComponent } from './recently-updated-locations/recently-updated-locations.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidePannelComponent } from './side-pannel/side-pannel.component';
import { LocationPanelComponent } from './location-panel/location-panel.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
const components = [
  HeaderComponent,
  CountCardComponent,
  RecentlyUpdatedLocationsComponent,
  NavbarComponent,
  SidebarComponent,
  SidePannelComponent
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
  ],
  declarations: [...components, LocationPanelComponent, SearchPanelComponent ],
  exports: [...components],
})
export class ComponentsModule {}
