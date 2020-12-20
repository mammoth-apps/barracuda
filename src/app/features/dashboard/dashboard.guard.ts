import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, first, switchMap, tap } from 'rxjs/operators';
import { BudgetActions } from 'src/app/ngrx-store/actions';
import { selectSelectedBudget } from '../../ngrx-store/selectors/budget.selectors';
import { IMammothState } from '../../ngrx-store/state/mammoth.state';

@Injectable()
export class DashboardLoadGuard implements CanActivate {
  constructor(private store: Store<IMammothState>) {}

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(selectSelectedBudget),
      tap((selectedBudget) => {
        if (!selectedBudget) {
          this.store.dispatch(
            BudgetActions.getBudget({ id: route.params.budgetId })
          );
        }
      }),
      filter((data) => !!data),
      switchMap((budget) => of(Boolean(budget))),
      first()
    );
  }
}
