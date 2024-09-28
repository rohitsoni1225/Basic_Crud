import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempplateFormComponent } from './tempplate-form.component';

describe('TempplateFormComponent', () => {
  let component: TempplateFormComponent;
  let fixture: ComponentFixture<TempplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempplateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
