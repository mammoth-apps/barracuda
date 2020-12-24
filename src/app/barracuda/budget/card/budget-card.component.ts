import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBudget } from '@mammoth-apps/api-interfaces';

@Component({
  selector: 'app-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss'],
})
export class BudgetCardComponent {
  @Input() budgetDetail: IBudget = {} as IBudget;
  @Output() deleteClick: EventEmitter<string> = new EventEmitter();
  @Output() selectClick: EventEmitter<string> = new EventEmitter();
  @Output() editClick: EventEmitter<IBudget> = new EventEmitter();

  constructor() {}

  public selectClicked(): void {
    this.selectClick.next(this.budgetDetail.id);
  }

  public deleteClicked(): void {
    this.deleteClick.next(this.budgetDetail.id);
  }

  public editClicked(): void {
    this.editClick.next(this.budgetDetail);
  }
}
