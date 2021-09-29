import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes'
import { storage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from '../../firebase/firebase-config'

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

        const imageRef   = ref(storage,'foto/perfil.jpg')       

        // const { ref:imgRef } = await uploadBytes(imageRef , img);
        uploadBytesResumable(imageRef, img )
        .then((snapshot) => {
            // console.log(snapshot)
            // console.log('Uploaded', snapshot.totalBytes, 'bytes.');
            // console.log('File metadata:', snapshot.metadata);
            // Let's get a download URL for the file.
            getDownloadURL(snapshot.ref)
                .then((url) => {
                console.log('File available at', url);
                // ...
            });
          }).catch((error) => {
            console.error('Upload failed', error);
            // ...
          });
        

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
