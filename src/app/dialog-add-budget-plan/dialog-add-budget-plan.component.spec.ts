import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddBudgetPlanComponent } from './dialog-add-budget-plan.component';

describe('DialogAddBudgetPlanComponent', () => {
  let component: DialogAddBudgetPlanComponent;
  let fixture: ComponentFixture<DialogAddBudgetPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddBudgetPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddBudgetPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
