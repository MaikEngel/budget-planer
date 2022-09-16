import { Component, OnInit } from '@angular/core';
import { DialogAddBudgetPlanComponent } from '../dialog-add-budget-plan/dialog-add-budget-plan.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  panelOpenState = false;
  tests: any = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddBudgetPlanComponent, {

    });

  }
}
