import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedDocumentationComponent } from './advanced-documentation.component';

describe('AdvancedDocumentationComponent', () => {
  let component: AdvancedDocumentationComponent;
  let fixture: ComponentFixture<AdvancedDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
