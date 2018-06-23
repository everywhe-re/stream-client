import { ChatMessage } from '../../models/chat-message';

export interface ChatStateModel {
  channel: string;
  messages: ChatMessage[];
}
