import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as crypto from 'crypto';

const serviceAccount = require('../everywhe-re-firebase-adminsdk-0kb8d-31d063f8a1.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://everywhe-re.firebaseio.com'
});

const firestore = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const setupBroadcaster = functions.auth.user().onCreate(async (user) => {
  // Generate stream key
  const streamKeyData = JSON.stringify(user);
  const sha = crypto.createHash('sha512').update(streamKeyData);
  const streamKey = sha.digest('hex');

  await firestore.collection('broadcasters').doc(user.uid).set({
    uid: user.uid,
    displayName: user.displayName,
    streamKey: streamKey,
    banned: false
  });
});
