import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActivityComponent } from './page-activity.component';

describe('PageActivityComponent', () => {
  let component: PageActivityComponent;
  let fixture: ComponentFixture<PageActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
