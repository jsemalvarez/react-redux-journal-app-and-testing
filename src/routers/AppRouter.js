import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { onAuthStateChanged, auth } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch()

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect( () => {
        /**
         *  onAuthStateChanged es un observador del estado de autenticacion del usuario.
         * En caso de que la pagina se recargara, perderiamos los datos del state, pero 
         * onAuthStateChanged nos retorna el usuario en caso de estar autenticado o null en
         * caso de no estarlo 
         */
        onAuthStateChanged( auth, ( user ) => {       
            if( user?.uid ){
                dispatch( login( user.uid, user.displayName ) )
                setIsLoggedIn( true )
            }else{
                setIsLoggedIn( false )
            }
            
            setChecking(false)
        })

    }, [ dispatch, setChecking ])


    if( checking ){
        return(
            <h2>Cargando datos...</h2>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth"
                        component={ AuthRouter }
                    />

                    <Route 
                        exact
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
