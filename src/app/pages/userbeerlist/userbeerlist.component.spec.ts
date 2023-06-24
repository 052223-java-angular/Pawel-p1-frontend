import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBeerlistComponent } from './userbeerlist.component';

describe('UserbeerlistComponent', () => {
  let component: UserBeerlistComponent;
  let fixture: ComponentFixture<UserBeerlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBeerlistComponent]
    });
    fixture = TestBed.createComponent(UserBeerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
