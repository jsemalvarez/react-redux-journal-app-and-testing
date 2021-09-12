import React from 'react'
import PropTypes from 'prop-types'

import { Redirect, Route } from 'react-router'

export const PrivateRoutes = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname )
    
    return (
        <Route 
            { ...rest }
            component={ (props) => { //NOTA 1             
                return ( isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/auth" /> )
            }}
        
        />            
    )
}

PrivateRoutes.propTpes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

/**
 * NOTA 1: al igual que con useState, que podemos recuperar el state usando setState( state => state + 1 ),
 * en el componente, con un callback podemos obtener los props, en este caso los props del componente ROUTE { history, natch, Location }
 */
