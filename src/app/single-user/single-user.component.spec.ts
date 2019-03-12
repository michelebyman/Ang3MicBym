import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUSerComponent } from './single-user.component';

describe('SingleUSerComponent', () => {
  let component: SingleUSerComponent;
  let fixture: ComponentFixture<SingleUSerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleUSerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
