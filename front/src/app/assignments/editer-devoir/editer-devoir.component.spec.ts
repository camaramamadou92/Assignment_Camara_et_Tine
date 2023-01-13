import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerDevoirComponent } from './editer-devoir.component';

describe('EditerDevoirComponent', () => {
  let component: EditerDevoirComponent;
  let fixture: ComponentFixture<EditerDevoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditerDevoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditerDevoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
