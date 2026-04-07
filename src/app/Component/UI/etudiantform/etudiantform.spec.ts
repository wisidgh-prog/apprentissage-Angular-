import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etudiantform } from './etudiantform';

describe('Etudiantform', () => {
  let component: Etudiantform;
  let fixture: ComponentFixture<Etudiantform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etudiantform],
    }).compileComponents();

    fixture = TestBed.createComponent(Etudiantform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
