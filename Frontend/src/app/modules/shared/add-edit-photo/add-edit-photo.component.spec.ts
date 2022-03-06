import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPhotoComponent } from './add-edit-photo.component';

describe('AddEditPhotoComponent', () => {
  let component: AddEditPhotoComponent;
  let fixture: ComponentFixture<AddEditPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
