import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes'
import { storage, ref, uploadBytes } from '../../firebase/firebase-config'

export const NotesAppBar = () => {

    const dispatch = useDispatch()
    const { active:note} = useSelector( state => state.notes )

    const handleSave = () => {
        dispatch( startSaveNote( note ) )
    }


    const handleSelectFile = async ( e ) => {

        const img = e.target.files[0]     

        // var storageRef = firebase.storage().ref();
        // const imgRef = await storage.ref().child('jose').child('foto perfil')

        const usersCollection  = ref(storage,'foto/perfil.jpg')       

        const { ref:imgRef } = await uploadBytes(usersCollection, img);

        console.log( imgRef.fullPath )

    }


    const startSaveImage = async () => {
        
        try {
            
            // const imgRef = await getStorage()

        } catch (error) {
            console.log( error )
        }
    }


    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>

            <div>
                {/* <button 
                    className="btn"
                >
                    Picture
                </button> */}

                <input 
                    type="file"
                    onChange={ handleSelectFile }
                />

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
