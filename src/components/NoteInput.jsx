"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const NoteInput = () => {
  const router = useRouter();
  const [note, setNote] = useState("");

  async function CreateNote() {
    const res = await fetch(
      "https://devscale-mockapi.fly.dev/api/collections/notes/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: note,
          user: "ekmigasari@gmail.com",
          additionalData: "",
        }),
      }
    );
    const data = await res.json();
    console.log(data);
    router.refresh();
  }

  return (
    <div>
      <h3>Input</h3>
      <input onChange={(e) => setNote(e.target.value)} />
      <button onClick={CreateNote}>Save Note</button>
    </div>
  );
};
