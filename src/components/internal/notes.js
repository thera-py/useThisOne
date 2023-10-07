import React from "react";
import { useState } from 'react'
import { MDBInput } from 'mdbreact'
import '../../public/internal/notes.css'

export default function Notes(props){
    const [note, setNote] = useState("");

    return(
        <div>
            <MDBInput className="note" type="textarea" label="Notes" rows="19" />
        </div>
    )
}