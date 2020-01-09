import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterLoginNavigationComponent } from './after-login-navigation.component';

describe('AfterLoginNavigationComponent', () => {
  let component: AfterLoginNavigationComponent;
  let fixture: ComponentFixture<AfterLoginNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterLoginNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterLoginNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
