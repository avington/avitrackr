import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuLoginComponent } from './sub-menu-login.component';

describe('SubMenuLoginComponent', () => {
  let component: SubMenuLoginComponent;
  let fixture: ComponentFixture<SubMenuLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
