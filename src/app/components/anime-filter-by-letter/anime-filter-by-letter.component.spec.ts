import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeFilterByLetterComponent } from './anime-filter-by-letter.component';

describe('AnimeFilterByLetterComponent', () => {
  let component: AnimeFilterByLetterComponent;
  let fixture: ComponentFixture<AnimeFilterByLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeFilterByLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeFilterByLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
