import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaveWordPopup } from './save-word-popup';

describe('SaveWordPopup', () => {
  let component: SaveWordPopup;
  let fixture: ComponentFixture<SaveWordPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveWordPopup],
    }).compileComponents();

    fixture = TestBed.createComponent(SaveWordPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
