import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-grid',
  templateUrl: './account-grid.component.html',
  styleUrls: ['./account-grid.component.scss'],
})
export class AccountGridComponent {
  public accountId: string | null;
  constructor(private activatedRoute: ActivatedRoute) {
    this.accountId = this.activatedRoute.snapshot.paramMap.get('accountId');
  }
}
