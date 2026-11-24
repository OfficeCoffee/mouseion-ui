import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewWordsPage } from './view-words-page';

describe('ViewWordsPage', () => {
  let component: ViewWordsPage;
  let fixture: ComponentFixture<ViewWordsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewWordsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewWordsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
