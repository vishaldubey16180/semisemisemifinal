import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserafterLoginstateComponent } from './userafter-loginstate.component';

describe('UserafterLoginstateComponent', () => {
  let component: UserafterLoginstateComponent;
  let fixture: ComponentFixture<UserafterLoginstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserafterLoginstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserafterLoginstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
