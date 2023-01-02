import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrigeComponent } from './corrige.component';

describe('CorrigeComponent', () => {
  let component: CorrigeComponent;
  let fixture: ComponentFixture<CorrigeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrigeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
