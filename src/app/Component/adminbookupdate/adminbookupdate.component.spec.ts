import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbookupdateComponent } from './adminbookupdate.component';

describe('AdminbookupdateComponent', () => {
  let component: AdminbookupdateComponent;
  let fixture: ComponentFixture<AdminbookupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbookupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbookupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
