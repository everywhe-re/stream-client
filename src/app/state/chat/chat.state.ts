import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ChatStateModel } from './chat.model';
import { PostChatMessage, SelectChannel } from './chat.actions';
import { AngularFirestore, DocumentChangeAction, DocumentData } from 'angularfire2/firestore';
import { ChatMessage } from '../../models/chat-message';

@State<ChatStateModel>({
  name: 'chat',
  defaults: {
    channel: null,
    messages: []
  }
})
export class ChatState {

  @Selector() static channel(state: ChatStateModel) { return state.channel; }
  @Selector() static messages(state: ChatStateModel) { return state.messages; }


  constructor(private firestore: AngularFirestore) {}


  @Action(SelectChannel)
  async selectChannel(ctx: StateContext<ChatStateModel>, action: SelectChannel) {
    // Update channel
    ctx.patchState({
      channel: action.channel
    });

    this.firestore.collection('chat').doc(action.channel).collection('messages')
      .stateChanges(['added'])
      .subscribe((changes: DocumentChangeAction<DocumentData>[]) => {
        changes.forEach((change: DocumentChangeAction<DocumentData>) => {
          // No data
          if (!change.payload.doc.exists) {
            return;
          }

          // Get document
          const document: ChatMessage = <ChatMessage>change.payload.doc.data();

          // Add message
          ctx.patchState({
            messages: [...ctx.getState().messages, document]
          });
        });
      });
  }

  @Action(PostChatMessage)
  async postChatMessage(ctx: StateContext<ChatStateModel>, action: PostChatMessage) {
    await this.firestore
      .collection('chat')
      .doc(ctx.getState().channel)
      .collection('messages')
      .add(action.message);
  }

}
