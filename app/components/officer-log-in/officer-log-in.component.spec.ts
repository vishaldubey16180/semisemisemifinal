import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerLogInComponent } from './officer-log-in.component';

describe('OfficerLogInComponent', () => {
  let component: OfficerLogInComponent;
  let fixture: ComponentFixture<OfficerLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
