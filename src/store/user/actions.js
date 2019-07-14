/*
export function someAction (context) {
}
*/
import firebase from 'firebase'
import Router from "../../router/index";

import {db} from '../../boot/db'

export function signInAction(context, prov){
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then( async () => {
        if(prov == 'google')
        var provider = new firebase.auth.GoogleAuthProvider()
        else if(prov == 'facebook')
        var provider = new firebase.auth.FacebookAuthProvider()
        return firebase.auth().signInWithRedirect(provider)
    })
    .then( (result) => {
        context.commit('stateDialogLogin', false)
        context.commit('setUser', JSON.parse(JSON.stringify(result.user)) )
        console.log('PROVEEDOR', result.user);

        return db.collection('usuarios').doc(result.user.uid).set({
            nombre: result.user.displayName,
            avatar: result.user.photoURL,
            email: result.user.email,  
        })
    })
    .then(r => {
        if(result.additionalUserInfo.isNewUser)
            Router().push({name: 'welcome'})
        else 
            Router().push({name: 'lugar.index'})
    })
    .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
    })
}

export function logout(context){
    firebase.auth().signOut().then(() => {
        console.log('Cerrando Sesión');
        
        context.commit('setUser', null)
        Router().push({name: 'login'})
    }, function(error) {
    // An error happened.
    });
}
