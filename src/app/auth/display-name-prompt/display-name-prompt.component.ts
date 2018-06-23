import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { UpdateDisplayName } from '../../state/auth/auth.actions';

@Component({
  selector: 'str-display-name-prompt',
  templateUrl: './display-name-prompt.component.html',
  styleUrls: ['./display-name-prompt.component.scss']
})
export class DisplayNamePromptComponent {

  displayName: string;


  constructor(private store: Store,
              private router: Router) { }


  /**
   * Update the current user's display name
   */
  async updateDisplayName() {
    this.store.dispatch(new UpdateDisplayName(this.displayName))
      .subscribe(() => this.router.navigate(['/']));
  }

}
