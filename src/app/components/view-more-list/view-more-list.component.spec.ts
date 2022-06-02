import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreListComponent } from './view-more-list.component';

describe('ViewMoreListComponent', () => {
  let component: ViewMoreListComponent;
  let fixture: ComponentFixture<ViewMoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
