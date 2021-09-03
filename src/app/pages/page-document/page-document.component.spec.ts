import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDocumentComponent } from './page-document.component';

describe('PageDocumentComponent', () => {
  let component: PageDocumentComponent;
  let fixture: ComponentFixture<PageDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
