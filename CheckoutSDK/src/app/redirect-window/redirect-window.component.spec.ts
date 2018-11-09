import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectWindowComponent } from './redirect-window.component';

describe('RedirectWindowComponent', () => {
  let component: RedirectWindowComponent;
  let fixture: ComponentFixture<RedirectWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
