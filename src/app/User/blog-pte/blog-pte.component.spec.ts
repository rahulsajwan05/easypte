import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPteComponent } from './blog-pte.component';

describe('BlogPteComponent', () => {
  let component: BlogPteComponent;
  let fixture: ComponentFixture<BlogPteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
