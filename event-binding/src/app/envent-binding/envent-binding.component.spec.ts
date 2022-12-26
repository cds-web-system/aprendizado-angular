import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnventBindingComponent } from './envent-binding.component';

describe('EnventBindingComponent', () => {
  let component: EnventBindingComponent;
  let fixture: ComponentFixture<EnventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnventBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
