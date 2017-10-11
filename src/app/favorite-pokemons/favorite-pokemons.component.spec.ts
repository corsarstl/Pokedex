import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePokemonsComponent } from './favorite-pokemons.component';

describe('FavoritePokemonsComponent', () => {
  let component: FavoritePokemonsComponent;
  let fixture: ComponentFixture<FavoritePokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePokemonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
