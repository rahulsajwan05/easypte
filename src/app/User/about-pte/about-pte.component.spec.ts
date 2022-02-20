import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPteComponent } from './about-pte.component';

describe('AboutPteComponent', () => {
  let component: AboutPteComponent;
  let fixture: ComponentFixture<AboutPteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
