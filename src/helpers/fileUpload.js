import { storage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from '../firebase/firebase-config'


export const fileUpload = async ( img, idUser, idNote  ) => {

    // v8 de firebase
    // var storageRef = firebase.storage().ref();
    // const imgRef = await storage.ref().child('jose').child('foto perfil')

    try {
        
        const imageRef = ref(storage, `${idUser}/${idNote}.jpg`)

        // const { ref:imgRef } = await uploadBytes(imageRef , img);

        const snapshot = await uploadBytesResumable(imageRef, img )
        return await getDownloadURL(snapshot.ref)

    } catch (error) {
        throw error
    }

}