import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudianEditPage } from './etudian-edit-page';

describe('EtudianEditPage', () => {
  let component: EtudianEditPage;
  let fixture: ComponentFixture<EtudianEditPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtudianEditPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EtudianEditPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
