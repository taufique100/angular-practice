import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Controlcount } from './controlcount';

describe('Controlcount', () => {
  let component: Controlcount;
  let fixture: ComponentFixture<Controlcount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Controlcount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Controlcount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
