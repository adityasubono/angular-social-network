import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePeopleComponent } from './page-people.component';

describe('PagePeopleComponent', () => {
  let component: PagePeopleComponent;
  let fixture: ComponentFixture<PagePeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
