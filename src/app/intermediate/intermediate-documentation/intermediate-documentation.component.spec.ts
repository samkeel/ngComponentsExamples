import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateDocumentationComponent } from './intermediate-documentation.component';

describe('IntermediateDocumentationComponent', () => {
  let component: IntermediateDocumentationComponent;
  let fixture: ComponentFixture<IntermediateDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntermediateDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediateDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
