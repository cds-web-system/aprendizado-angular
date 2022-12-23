import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingCssComponent } from './data-binding-css.component';

describe('DataBindingCssComponent', () => {
  let component: DataBindingCssComponent;
  let fixture: ComponentFixture<DataBindingCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
