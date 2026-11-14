import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddWordPopup } from './add-word-popup';

describe('AddWordPopup', () => {
  let component: AddWordPopup;
  let fixture: ComponentFixture<AddWordPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWordPopup],
    }).compileComponents();

    fixture = TestBed.createComponent(AddWordPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
