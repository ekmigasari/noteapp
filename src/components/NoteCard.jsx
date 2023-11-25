"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "postcss";

export const NoteCard = ({ id, content }) => {
  const router = useRouter();
  const [onEdit, setOnEdit] = useState(false);
  const [currentContent, setCurrentContent] = useState(content);

  async function handleDelete() {
    await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "DELETE",
      }
    );
    router.refresh();
  }

  async function handleUpdate() {
    const res = await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: currentContent }),
      }
    );
    const data = await res.json();
    setOnEdit(false);
    router.refresh();
  }

  return (
    <div>
      {onEdit ? (
        <input
          value={currentContent}
          onChange={(e) => setCurrentContent(e.target.value)}
        />
      ) : (
        <div>{currentContent}</div>
      )}
      {onEdit ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={() => setOnEdit(true)}>Edit</button>
      )}

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
