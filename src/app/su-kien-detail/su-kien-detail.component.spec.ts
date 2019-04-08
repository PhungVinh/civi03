import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuKienDetailComponent } from './su-kien-detail.component';

describe('SuKienDetailComponent', () => {
  let component: SuKienDetailComponent;
  let fixture: ComponentFixture<SuKienDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuKienDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuKienDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
