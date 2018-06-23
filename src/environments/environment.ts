// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  streamEndpoint: 'https://stream1.everywhe.re/dash',
  firebase: {
    apiKey: 'AIzaSyApqJy14PdAaoauB7qDKa26LpwKpqvy8co',
    authDomain: 'everywhe-re.firebaseapp.com',
    databaseURL: 'https://everywhe-re.firebaseio.com',
    projectId: 'everywhe-re',
    storageBucket: 'everywhe-re.appspot.com',
    messagingSenderId: '29260839840'
  },
  actionCodeSettings: {
    url: 'http://localhost:4200/auth',
    handleCodeInApp: true
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
