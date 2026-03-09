import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Displaycount } from './displaycount';

describe('Displaycount', () => {
  let component: Displaycount;
  let fixture: ComponentFixture<Displaycount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Displaycount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Displaycount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
