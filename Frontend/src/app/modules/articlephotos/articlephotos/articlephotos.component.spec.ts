import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlephotosComponent } from './articlephotos.component';

describe('ArticlephotosComponent', () => {
  let component: ArticlephotosComponent;
  let fixture: ComponentFixture<ArticlephotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlephotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlephotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
