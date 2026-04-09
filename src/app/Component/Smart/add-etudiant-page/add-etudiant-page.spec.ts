import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEtudiantPage } from './add-etudiant-page';

describe('AddEtudiantPage', () => {
  let component: AddEtudiantPage;
  let fixture: ComponentFixture<AddEtudiantPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEtudiantPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEtudiantPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
