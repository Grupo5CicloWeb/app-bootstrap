import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPipesComponent } from './form-pipes.component';

describe('FormPipesComponent', () => {
  let component: FormPipesComponent;
  let fixture: ComponentFixture<FormPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
