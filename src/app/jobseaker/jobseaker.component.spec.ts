import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseakerComponent } from './jobseaker.component';

describe('JobseakerComponent', () => {
  let component: JobseakerComponent;
  let fixture: ComponentFixture<JobseakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
