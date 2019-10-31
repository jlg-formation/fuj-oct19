import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessComponent } from './success.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('SuccessComponent', () => {
  let component: SuccessComponent;
  let fixture: ComponentFixture<SuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [ SuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
