import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  constructor() { }

  MONEY: any = {
    'date': [],
    'income': [],
    'living': [],
    'shopping': [],
    'ride': [],
    'entertainment': [],
    'other': [],
  };
}
