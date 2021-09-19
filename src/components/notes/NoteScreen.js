import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { activeNote, startDeleting } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'

import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch()
    const { active:note } = useSelector( state => state.notes )
    const [ formValues, handleInputChange, reset ] = useForm( note )

    /**
     * cuando pasamos de una nota a otra, el useForm no cambia su estado,
     * con useEffect, cambiamos el estado de useForm si el id de la nota activa es distinto de la nota
     * que queremos mostrar, ya que si no ponemos esa condicion
     * el efecto se dispararia constantemente y para ello no ayudamos con useRef que puede cambiar de valor 
     * sin redibujar el  componente 
     */

    const activeId = useRef( note.id )

    useEffect( () => {

        if( note.id !== activeId.current ){
                reset( note )
                activeId.current = note.id 
        }

    }, [note, reset] )


    useEffect( () => {
        
        dispatch( activeNote( formValues.id, { ...formValues } ) )

    }, [ formValues, dispatch ] )
     

    const { title, body, id } = formValues 

    const handleDelete = () => {

        dispatch( startDeleting( id ) )
    }

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={ title }
                    onChange={ handleInputChange }
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    value={ body }
                    onChange={ handleInputChange }
                ></textarea>

                <div className="notes__image">
                    <img 
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                        alt="imagen"
                    />
                </div>


            </div>

            <button
                className="btn btn-danger"
                onClick={ handleDelete }
            >
                Delete
            </button>

        </div>
    )
}
