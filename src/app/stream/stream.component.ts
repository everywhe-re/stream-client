import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { environment } from '../../environments/environment';
import { Observable, Subscription } from '../../../node_modules/rxjs';
import { ChatComponent } from '../chat/chat.component';
import { User } from 'firebase';
import { Store } from '@ngxs/store';
import { AuthState } from '../state/auth/auth.state';

@Component({
  selector: 'str-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit, OnDestroy {

  @ViewChild(ChatComponent) chat: ChatComponent;

  user$: Observable<User>;

  source: string;
  broadcaster: string;

  private paramsSubscription: Subscription;


  constructor(private store: Store,
              private route: ActivatedRoute) {
    this.user$ = this.store.select(AuthState.user);
  }


  ngOnInit() {
    // Subscribe to route params
    this.route.params.subscribe((params: any) => {
      this.broadcaster = params['user'];
      this.source = `${environment.streamEndpoint}/${this.broadcaster}.mpd?token=abc123`;

      // Select chat channel
      if (this.chat) {
        this.chat.setChannel(this.broadcaster);
      }
    });
  }

  ngOnDestroy() {
    // Unsubscribe from route params
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }

}
