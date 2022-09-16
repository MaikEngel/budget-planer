import { Component, OnInit, VERSION, ViewChild, ElementRef, AfterViewInit, QueryList, ViewChildren, Inject } from '@angular/core';
import { MoneyService } from '../money.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-dialog-add-budget-plan',
  templateUrl: './dialog-add-budget-plan.component.html',
  styleUrls: ['./dialog-add-budget-plan.component.scss']
})


export class DialogAddBudgetPlanComponent implements OnInit, AfterViewInit {
  @ViewChildren('incomess', { read: ElementRef }) incomesss!: ElementRef;

  incomes: any = [
    {
      'id': 'income0',
      'categoryId': 'incomeCategory0'
    }
  ];

  livings: any = [
    {
      'id': 'living0',
      'categoryId': 'livingCategory0'

    }
  ]

  shoppings: any = [
    {
      'id': 'shopping0',
      'categoryId': 'shoppingCategory0'
    }
  ]

  rides: any = [
    {
      'id': 'ride0',
      'categoryId': 'rideCategory0'

    }
  ]

  entertainments: any = [
    {
      'id': 'entertainment0',
      'categoryId': 'entertainmentCategory0'
    }
  ]

  others: any = [
    {
      'id': 'other0',
      'categoryId': 'otherCategory0'
    }
  ]

  id = 0;
  categoryId = 0;
  amount: any;
  category: any;
  date: any;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  constructor(public money: MoneyService, @Inject(DOCUMENT) document: Document,) {
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }

  addBudgetPlan() {
    for (let i = 0; i < this.incomes.length; i++) {
      this.money.MONEY.income.push(
        { 'category': (<HTMLInputElement>document.getElementById('incomeCategory' + i)).value },
        { 'money': (<HTMLInputElement>document.getElementById('income' + i)).value },
      )
      console.log(this.money.MONEY);
    }
  }

  ngOnInit(): void {
  }


  addRow(array: any, arrayName: any) {
    this.id = array.length;
    this.categoryId = array.length;

    array.push(
      {
        'id': arrayName + this.id,
        'categoryId': arrayName + 'Category' + this.categoryId
      }
    )
    console.log(this.id)
  }

  deleteRow(i: number, array: any) {
    array.splice(i, 1)
  }

}

