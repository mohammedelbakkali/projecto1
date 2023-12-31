import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpageComponent } from './showpage.component';

describe('ShowpageComponent', () => {
  let component: ShowpageComponent;
  let fixture: ComponentFixture<ShowpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ShowpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
