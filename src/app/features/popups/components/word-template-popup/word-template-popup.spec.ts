import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordTemplatePopup } from './word-template-popup';

describe('WordTemplatePopup', () => {
  let component: WordTemplatePopup;
  let fixture: ComponentFixture<WordTemplatePopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordTemplatePopup],
    }).compileComponents();

    fixture = TestBed.createComponent(WordTemplatePopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
