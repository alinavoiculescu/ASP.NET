import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditArticlephotoComponent } from './add-edit-articlephoto.component';

describe('AddEditArticlephotoComponent', () => {
  let component: AddEditArticlephotoComponent;
  let fixture: ComponentFixture<AddEditArticlephotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditArticlephotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditArticlephotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
