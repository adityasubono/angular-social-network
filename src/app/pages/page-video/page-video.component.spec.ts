import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVideoComponent } from './page-video.component';

describe('PageVideoComponent', () => {
  let component: PageVideoComponent;
  let fixture: ComponentFixture<PageVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
