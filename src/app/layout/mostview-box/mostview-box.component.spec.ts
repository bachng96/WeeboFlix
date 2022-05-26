import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostviewBoxComponent } from './mostview-box.component';

describe('MostviewBoxComponent', () => {
  let component: MostviewBoxComponent;
  let fixture: ComponentFixture<MostviewBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostviewBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostviewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
