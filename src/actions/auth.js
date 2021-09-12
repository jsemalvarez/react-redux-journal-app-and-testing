import Swal from "sweetalert2"
import { 
    signInWithPopup, 
    auth, 
    googleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    updateProfile, 
} from "../firebase/firebase-config"
import { types } from "../types/types"
import { finishLoading, startLoading } from "./ui"

export const startLoginEmailPassword = ( email, password ) => {
    return ( dispatch ) => {
        dispatch( startLoading() )
        signInWithEmailAndPassword(auth, email, password)
            .then( ({ user }) => {               
                    
                dispatch( login( user.uid, user.displayName) )
                // dispatch( finishLoading() )
            }) 
            .catch( e => {
                console.log(e)
                // dispatch( finishLoading() )
                Swal.fire('Error', e.message, 'error')
            })
            .finally( () => {
                dispatch( finishLoading() )
            })

    }
}

export const startGoogleLogin = () => {
    return( dispatch ) => {

        signInWithPopup(auth, googleAuthProvider)
            .then( ({ user }) => {
                dispatch( login( user.uid, user.displayName))
            }) 
    }
}


export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispatch ) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then( async({ user }) => {

                /**
                 * cuando creamos un usuario de esta manera, no tenemos el displayName,
                 * ya que este atributo se completa cuando hacemos login con redes sociales.
                 * Por eso usamos updateProfile(), para cargar el displayName en firebase con el name que solicitamos en nuestro registo,
                 * tambien podriamos cargar un fato de perfil pasando un link de la misma
                 * 
                 */
                await updateProfile( user, { displayName: name } )
                    
                dispatch( login( user.uid, user.displayName) )

            }) 
            .catch( e => {
                console.log(e)
                Swal.fire('Error', e.message, 'error')
            })
    }
}

export const login = ( uid, displayName ) => ({
        type: types.login,
        payload: { uid, displayName }
    })

export const startLogout = () => {
    return async( dispatch ) => {
        await signOut( auth )

        dispatch( logout() )
    }
}

export const logout = () => ({
    type: types.logout
})