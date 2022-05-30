import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresBoxComponent } from './genres-box.component';

describe('GenresBoxComponent', () => {
  let component: GenresBoxComponent;
  let fixture: ComponentFixture<GenresBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenresBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
