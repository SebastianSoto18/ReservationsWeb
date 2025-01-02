import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsManagmentComponent } from './reservations-managment.component';

describe('ReservationsManagmentComponent', () => {
  let component: ReservationsManagmentComponent;
  let fixture: ComponentFixture<ReservationsManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationsManagmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationsManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
