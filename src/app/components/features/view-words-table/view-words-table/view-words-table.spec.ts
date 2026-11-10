import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewWordsTable } from './view-words-table';

describe('ViewWordsTable', () => {
  let component: ViewWordsTable;
  let fixture: ComponentFixture<ViewWordsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewWordsTable],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewWordsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
