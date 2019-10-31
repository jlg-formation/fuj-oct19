import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredComponent } from './delivered.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('DeliveredComponent', () => {
  let component: DeliveredComponent;
  let fixture: ComponentFixture<DeliveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [ DeliveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
