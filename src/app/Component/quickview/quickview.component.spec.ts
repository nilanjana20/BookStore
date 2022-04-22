import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { QuickviewComponent } from './quickview.component';

describe('QuickviewComponent', () => {
  let component: QuickviewComponent;
  let fixture: ComponentFixture<QuickviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickviewComponent ],
      imports: [HttpClientModule,ActivatedRoute]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
