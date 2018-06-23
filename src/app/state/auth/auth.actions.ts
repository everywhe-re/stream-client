export class RequestLoginLink {
  static type = '[Auth] Request Login Link';
  constructor(public email: string) {}
}

export class ConfirmLogin {
  static type = '[Auth] Confirm Login';
  constructor() {}
}

export class UpdateDisplayName {
  static type = '[Auth] Update Display Name';
  constructor(public displayName: string) {}
}

export class UpdateUser {
  static type = '[Auth] Update User';
  constructor() {}
}
