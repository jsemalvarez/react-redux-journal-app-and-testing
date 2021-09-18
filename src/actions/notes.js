import { addDoc, collection, db } from "../firebase/firebase-config"
import { loadNotes } from "../helpers/loadNotes"
import { types } from '../types/types'

export const startNewNote = () => {
    return async( dispatch, getState ) => {

        const uid = getState().auth.uid

        const newNote = {
            title: 'Intento 3',
            body: 'creo que lo logramos',
            date: new Date().getTime()
        }

        // const doc = db.collection(`${ uid }/journal/notes`).add( newNote )

        // la promesa retorna una referencia al documento
        const doc = await addDoc( collection( db, `${ uid }`, '/journal/notes'), newNote)

        dispatch( activeNote( doc.id, newNote) )
    }
}

export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload:{ id, ...note }
})

export const startLoadingNotes = ( uid ) => {
    return async ( dispatch ) => {

        const notes = await loadNotes( uid )
        dispatch( setNotes( notes ) )
    }
}

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
})