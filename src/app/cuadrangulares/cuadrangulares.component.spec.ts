import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrangularesComponent } from './cuadrangulares.component';

describe('CuadrangularesComponent', () => {
  let component: CuadrangularesComponent;
  let fixture: ComponentFixture<CuadrangularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadrangularesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadrangularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
