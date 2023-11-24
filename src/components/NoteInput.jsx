"use client";

import { useState } from "react";

export const NoteInput = () {
    const [note,setNote] = useState("");

    async function createNote(){
        const res = await fetch("", {
                method: "POST""
header:

        })
    }
}