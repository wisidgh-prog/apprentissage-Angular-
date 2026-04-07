import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantListPage } from './etudiant-list-page';

describe('EtudiantListPage', () => {
  let component: EtudiantListPage;
  let fixture: ComponentFixture<EtudiantListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtudiantListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EtudiantListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
