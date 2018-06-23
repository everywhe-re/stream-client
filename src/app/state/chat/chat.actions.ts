import { ChatMessage } from '../../models/chat-message';

export class SelectChannel {
  static type = '[Chat] Select Channel';
  constructor(public channel: string) {}
}

export class PostChatMessage {
  static type = '[Chat] Post Message';
  constructor (public message: ChatMessage) {}
}
