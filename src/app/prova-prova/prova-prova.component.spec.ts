import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaProvaComponent } from './prova-prova.component';

describe('ProvaProvaComponent', () => {
  let component: ProvaProvaComponent;
  let fixture: ComponentFixture<ProvaProvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvaProvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvaProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
