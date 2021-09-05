import firebase from 'react-native-firebase'

export const getUsersList = () => {
    return async (dispatch) => {
        firebase.firestore().collection("users").get().then(function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting  in document:", error);
        });
    }
}