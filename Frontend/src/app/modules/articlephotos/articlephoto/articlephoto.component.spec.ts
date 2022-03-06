import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlephotoComponent } from './articlephoto.component';

describe('ArticlephotoComponent', () => {
  let component: ArticlephotoComponent;
  let fixture: ComponentFixture<ArticlephotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlephotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlephotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
