import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhNangMoiComponent } from './tinh-nang-moi.component';

describe('TinhNangMoiComponent', () => {
  let component: TinhNangMoiComponent;
  let fixture: ComponentFixture<TinhNangMoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinhNangMoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinhNangMoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
