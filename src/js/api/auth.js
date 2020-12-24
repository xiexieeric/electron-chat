import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../db/firestore';

function createUserProfile(userProfile) {
    return db
        .collection('profiles')
        .doc(userProfile.uid)
        .set(userProfile)
}

export async function register({email, password, username, avatar}) {
    try {
        const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
        await createUserProfile({uid: user.uid, username, email, avatar, joinedChats: []})
    } catch(err) {
        return Promise.reject(error.message);
    }
}

export const onAuthStateChanged = handleAuthStatechanged => {
    firebase.auth().onAuthStateChanged(handleAuthStatechanged);
}