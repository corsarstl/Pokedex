import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedPokemonComponent } from './detailed-pokemon.component';

describe('DetailedPokemonComponent', () => {
  let component: DetailedPokemonComponent;
  let fixture: ComponentFixture<DetailedPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
