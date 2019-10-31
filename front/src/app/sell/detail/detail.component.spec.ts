import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetModule } from 'src/app/widget/widget.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, WidgetModule, RouterTestingModule],
      declarations: [ DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
