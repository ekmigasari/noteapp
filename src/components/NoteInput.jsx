"use client";

import { MessagesSquare } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const NoteInput = () => {
  const router = useRouter();
  const [note, setNote] = useState("");

  async function CreateNote() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/jJ5wMdzaLYEI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ name: note }]),
    });
    const data = await res.json();
    console.log(data);
    router.refresh();
    setNote("");
  }

  return (
    <div>
      <div className="card bg-white min-h-[196px] justify-between">
        <textarea
          onChange={(e) => setNote(e.target.value)}
          value={note}
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
