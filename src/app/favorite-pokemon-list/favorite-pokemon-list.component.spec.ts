import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePokemonListComponent } from './favorite-pokemon-list.component';

describe('FavoritePokemonListComponent', () => {
  let component: FavoritePokemonListComponent;
  let fixture: ComponentFixture<FavoritePokemonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePokemonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
