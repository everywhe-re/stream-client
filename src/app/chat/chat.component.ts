import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatMessage } from '../models/chat-message';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ChatState } from '../state/chat/chat.state';
import { AuthState } from '../state/auth/auth.state';
import { User } from 'firebase';
import { PostChatMessage } from '../state/chat/chat.actions';

@Component({
  selector: 'str-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild('history') history: ElementRef;

  showEmojiPicker: boolean;

  messages$: Observable<ChatMessage[]>;
  message = '';


  constructor(private store: Store) {
    this.messages$ = this.store.select(ChatState.messages);
  }


  ngOnInit() {
  }


  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event: any) {
    this.showEmojiPicker = false;
    this.message += `${event.emoji.native}`;
  }


  async sendMessage() {
    // Invalid message
    if (!this.message || this.message.replace(' ', '').length === 0) {
      return;
    }

    // Get current user
    const user: User = this.store.selectSnapshot(AuthState.user);

    // Build chat message
    const message: ChatMessage = {
      sender: user.uid,
      senderName: user.displayName || user.uid,
      message: this.message
    };

    // Post chat message
    this.store.dispatch(new PostChatMessage(message));

    // Reset message input
    this.message = '';
  }

}
