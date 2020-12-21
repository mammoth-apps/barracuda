import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
})
export class AccountDetailComponent {
  public accountId: string | null;
  constructor(private activatedRoute: ActivatedRoute) {
    this.accountId = this.activatedRoute.snapshot.paramMap.get('accountId');
  }
}
