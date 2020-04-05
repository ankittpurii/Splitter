const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
firebase.initializeApp({
    apiKey: 'AIzaSyDUpU3WnKVAVW9Aq1eIVJGv4fjqmLIj4mQ',
    authDomain: 'splitter-ffe14.firebaseapp.com',
    projectId: 'splitter-ffe14'
});

export const db = firebase.firestore();