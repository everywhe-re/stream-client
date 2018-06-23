import { User } from 'firebase';

export interface AuthStateModel {
  user: User;
  emailForSignIn: string;
}
