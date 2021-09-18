import { db, collection, getDocs } from "../firebase/firebase-config"


export const loadNotes = async ( uid ) => {

    // const notesSnap = await db.collection( `${ uid }/journal/notes`).get()
    const notesSnap = await getDocs( collection( db, `${ uid }/journal/notes` ) )
    const notes = []

    notesSnap.forEach( snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })


    return notes
}