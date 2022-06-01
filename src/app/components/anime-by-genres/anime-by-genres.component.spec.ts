import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeByGenresComponent } from './anime-by-genres.component';

describe('AnimeByGenresComponent', () => {
  let component: AnimeByGenresComponent;
  let fixture: ComponentFixture<AnimeByGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeByGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeByGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
