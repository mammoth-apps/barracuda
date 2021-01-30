import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAccount } from '@mammoth-apps/api-interfaces';

@Component({
  selector: 'app-account-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountListItemComponent implements OnInit {
  @Input() account: IAccount = {} as IAccount;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  public onAccountClick(): void {
    this.router.navigate(['account', this.account.id], {
      relativeTo: this.activatedRoute,
    });
  }
}
