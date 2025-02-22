import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegisterComponent } from './view-register.component';

describe('ViewRegisterComponent', () => {
  let component: ViewRegisterComponent;
  let fixture: ComponentFixture<ViewRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
