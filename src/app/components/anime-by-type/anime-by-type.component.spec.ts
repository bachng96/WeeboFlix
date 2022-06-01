import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeByTypeComponent } from './anime-by-type.component';

describe('AnimeByTypeComponent', () => {
  let component: AnimeByTypeComponent;
  let fixture: ComponentFixture<AnimeByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
