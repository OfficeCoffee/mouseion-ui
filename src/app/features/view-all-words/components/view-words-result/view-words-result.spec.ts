import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewWordsResult } from './view-words-result';

describe('ViewWordsResult', () => {
  let component: ViewWordsResult;
  let fixture: ComponentFixture<ViewWordsResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewWordsResult],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewWordsResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
