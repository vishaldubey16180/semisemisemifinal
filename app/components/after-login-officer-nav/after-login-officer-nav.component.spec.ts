import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterLoginOfficerNavComponent } from './after-login-officer-nav.component';

describe('AfterLoginOfficerNavComponent', () => {
  let component: AfterLoginOfficerNavComponent;
  let fixture: ComponentFixture<AfterLoginOfficerNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterLoginOfficerNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterLoginOfficerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
