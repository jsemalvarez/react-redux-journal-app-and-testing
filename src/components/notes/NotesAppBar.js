import React from 'react'
import moment from 'moment'

import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUpLoading } from '../../actions/notes'


export const NotesAppBar = () => {

    const dispatch = useDispatch()
    const { active:note} = useSelector( state => state.notes )

    const noteDate = moment( note.date )

    const handleSave = () => {
        dispatch( startSaveNote( note ) )
    }


    const handlePictureClick = () => {

        document.querySelector('#fileSelector').click()
    }

    const handleFileChange = ( e ) => {
        const file =  e.target.files[0]

        if( file ){
            dispatch( startUpLoading( file ) )
        }
    }


    return (
        <div className="notes__appbar">
            <span>{ noteDate.format( 'DD/MM/YYYY' ) }</span>

             <input 
                type="file"
                name="file"
                id="fileSelector"
                accept="image/jpg, image/jpeg"
                style={{ display:'none'}}
                onChange={ handleFileChange }
            />

            <div>
                <button 
                    className="btn"
                    onClick={ handlePictureClick }
                >
                    Picture
                </button>               

                <button 
                    className="btn"
                    onClick={ handleSave }
                >
                    Save
                </button>
            </div>
        </div>
    )
}
