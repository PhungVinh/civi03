import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChienDichComponent } from './chien-dich.component';

describe('ChienDichComponent', () => {
  let component: ChienDichComponent;
  let fixture: ComponentFixture<ChienDichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChienDichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChienDichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
