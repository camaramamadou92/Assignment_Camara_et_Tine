import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddevoirComponent } from './adddevoir.component';

describe('AdddevoirComponent', () => {
  let component: AdddevoirComponent;
  let fixture: ComponentFixture<AdddevoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddevoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddevoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
