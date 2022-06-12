import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDocumentationComponent } from './basic-documentation.component';

describe('BasicDocumentationComponent', () => {
  let component: BasicDocumentationComponent;
  let fixture: ComponentFixture<BasicDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
