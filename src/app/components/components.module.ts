import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
const components = [];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
  ],
  declarations: [...components],
  exports: [...components],
})
export class ComponentsModule {}
