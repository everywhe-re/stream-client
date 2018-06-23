import { User } from 'firebase';
import { Broadcaster } from '../../models/broadcaster';

export interface AuthStateModel {
  user: User;
  broadcaster: Broadcaster;
  emailForSignIn: string;
}
