import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyUpdatedLocationsComponent } from './recently-updated-locations.component';

describe('RecentlyUpdatedLocationsComponent', () => {
  let component: RecentlyUpdatedLocationsComponent;
  let fixture: ComponentFixture<RecentlyUpdatedLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyUpdatedLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyUpdatedLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
