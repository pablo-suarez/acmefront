import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdriverComponent } from './formdriver.component';

describe('FormdriverComponent', () => {
  let component: FormdriverComponent;
  let fixture: ComponentFixture<FormdriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormdriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
