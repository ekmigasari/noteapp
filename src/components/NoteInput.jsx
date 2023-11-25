"use client";

import { MessagesSquare, Trash, FileEdit } from "lucide-react";
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
    setNote("");
    router.refresh();
  }

  return (
    <div>
      <div className="card bg-white min-h-[196px] justify-between">
        <input
          onChange={(e) => setNote(e.target.value)}
          className="textArea"
          placeholder="Tuangkan keluh kesahmu, mari curcol bersamaku! Mau curhat apa hari ini?"
        />
        <button
          onClick={CreateNote}
          className="btnPrimary bg-green-600 text-white text-lg hover:bg-green-500 active:bg-green-800"
        >
          <div>
            <MessagesSquare size={20} color="#ffffff" />
          </div>
          <div>Post</div>
        </button>
      </div>
    </div>
  );
};
