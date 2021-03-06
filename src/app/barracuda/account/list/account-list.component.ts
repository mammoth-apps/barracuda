import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAccount } from '@mammoth-apps/api-interfaces';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AccountActions } from 'src/app/ngrx-store/actions';
import { selectAccountList } from 'src/app/ngrx-store/selectors/account.selectors';
import { IMammothState } from '../../../ngrx-store/state/mammoth.state';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit {
  public accounts$: Observable<IAccount[]>;
  constructor(
    private activatedRoute: ActivatedRoute,

    private store: Store<IMammothState>,
    private router: Router
  ) {
    this.accounts$ = this.store.pipe(select(selectAccountList));
  }

  public ngOnInit(): void {
    this.store.dispatch(AccountActions.loadAccounts());
  }

  public onAccountClick(account: IAccount): void {
    this.router.navigate(['account', account.id], {
      relativeTo: this.activatedRoute,
    });
  }
}
