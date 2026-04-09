import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEtudiantPage } from './edit-etudiant-page';

describe('EditEtudiantPage', () => {
  let component: EditEtudiantPage;
  let fixture: ComponentFixture<EditEtudiantPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEtudiantPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditEtudiantPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
