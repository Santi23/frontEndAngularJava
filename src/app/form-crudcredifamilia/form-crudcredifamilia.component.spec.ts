import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCRUDCredifamiliaComponent } from './form-crudcredifamilia.component';

describe('FormCRUDCredifamiliaComponent', () => {
  let component: FormCRUDCredifamiliaComponent;
  let fixture: ComponentFixture<FormCRUDCredifamiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCRUDCredifamiliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCRUDCredifamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
