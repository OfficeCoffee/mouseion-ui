import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditWordPopup } from './edit-word-popup';

describe('EditWordPopup', () => {
  let component: EditWordPopup;
  let fixture: ComponentFixture<EditWordPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditWordPopup],
    }).compileComponents();

    fixture = TestBed.createComponent(EditWordPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
