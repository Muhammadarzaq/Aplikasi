import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampingComponent } from './samping.component';

describe('SampingComponent', () => {
  let component: SampingComponent;
  let fixture: ComponentFixture<SampingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
