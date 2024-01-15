"use client";

import { MessagesSquare, Trash, FileEdit } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "postcss";

export const NoteCard = ({ id, content }) => {
  const router = useRouter();
  const [onEdit, setOnEdit] = useState(false);
  const [currentContent, setCurrentContent] = useState(content);

  async function handleDelete() {
    await fetch("https://v1.appbackend.io/v1/rows/jJ5wMdzaLYEI", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([id]),
    });
    router.refresh();
  }

  async function handleUpdate() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/jJ5wMdzaLYEI", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: id, name: currentContent }),
    });
    const data = await res.json();
    setOnEdit(false);
    router.refresh();
  }

  return (
    <div className="card">
      <div className="self-stretch font-bold text-sm ">Dear teman curhat,</div>
      {onEdit ? (
        <textarea
          value={currentContent}
          onChange={(e) => setCurrentContent(e.target.value)}
          className="textArea"
        />
      ) : (
        <div className="textArea">{currentContent}</div>
      )}

      <div className="btnBox">
        {onEdit ? (
          <button
            onClick={handleUpdate}
            className="btnPrimary bg-green-200 text-green-600 hover:bg-green-100 active:bg-green-400"
          >
            <MessagesSquare size={16} color="#047857" />
            <div>Update</div>
          </button>
        ) : (
          <button
            onClick={() => setOnEdit(true)}
            className="btnPrimary bg-orange-200 text-orange-600 hover:bg-orange-100 active:bg-orange-400"
          >
            <div>
              <FileEdit size={16} color="#ea580c" />
            </div>
            <div>Edit</div>
          </button>
        )}

        <button
          onClick={handleDelete}
          className="btnPrimary bg-red-200 text-red-600 hover:bg-red-100 active:bg-red-400"
        >
          <div>
            <Trash size={16} color="#dc2626" />
          </div>
          <div>Delete</div>
        </button>
      </div>
    </div>
  );
};
