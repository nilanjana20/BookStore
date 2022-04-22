import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AllbooksComponent } from './allbooks.component';

 describe('AllbooksComponent', () => {
  let component: AllbooksComponent;
  let fixture: ComponentFixture<AllbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllbooksComponent ],
      imports: [HttpClientModule,RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
