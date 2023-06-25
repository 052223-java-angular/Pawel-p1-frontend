import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeerReviewComponent } from './addbeerreview.component';

describe('AddbeerreviewComponent', () => {
  let component: AddBeerReviewComponent;
  let fixture: ComponentFixture<AddBeerReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBeerReviewComponent]
    });
    fixture = TestBed.createComponent(AddBeerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
