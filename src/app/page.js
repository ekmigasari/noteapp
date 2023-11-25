import { NoteCard } from "@/components/NoteCard";
import { NoteInput } from "@/components/NoteInput";
import { Edit } from "lucide-react";
import { MessagesSquare, Trash, FileEdit } from "lucide-react";

async function getNotes() {
  const rest = await fetch(
    "https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='ekmigasari@gmail.com')",
    {
      cache: "no-store",
    }
  );
  const data = await rest.json();
  return data;
}

export default async function Page() {
  const { items } = await getNotes();

  return (
    <div>
      <main>
        <div class="flex flex-col justify-center items-center gap-2 mb-8">
          <div className="text-center text-7xl font-bold tracking-normal font-sans text-pink-900 drop-shadow-md">
            CURCOL
          </div>
          <div className="w-[298px]  flex justify-center item-center text-white text-2xl rounded-3xl bg-red-300 px-1 py-0.5 font-sans">
            curhat-curhat online
          </div>
        </div>

        <div className="card bg-white min-h-[196px] justify-between">
          <div className="textArea">
            Tuangkan keluh kesahmu, mari curcol bersamaku! Mau curhat apa hari
            ini?
          </div>
          <div className="btnPrimary bg-green-600 text-white text-lg">
            <div>
              <MessagesSquare size={20} color="#ffffff" />
            </div>
            <div>Post</div>
          </div>
        </div>
        <div class="border-t border-white my-12"></div>

        <section className="flex flex-col gap-4">
          <div className="card">
            <div className="self-stretch font-bold text-sm ">
              Dear teman curhat,
            </div>
            <div className="textArea">Aku habis dicambuk sama majikan TT</div>
            <div className="btnBox">
              <div className="btnPrimary bg-green-200 text-green-600">
                <MessagesSquare size={16} color="#047857" />
                <div>Post</div>
              </div>
              <div className="btnPrimary bg-orange-200 text-orange-600">
                <div>
                  <FileEdit size={16} color="#ea580c" />
                </div>
                <div>Edit</div>
              </div>
              <div className="btnPrimary bg-red-200 text-red-600">
                <div>
                  <Trash size={16} color="#dc2626" />
                </div>
                <div>Delete</div>
              </div>
            </div>
          </div>
          <div className="card ">
            <div className="self-stretch font-bold text-sm ">
              Dear teman curhat,
            </div>
            <div className="textArea">
              Hari ini cape banget.... Kerja keras bagai kuda, semoga besok ga
              kaya gini lagi
            </div>
            <div className="btnBox">
              <div className="btnPrimary bg-green-200 text-green-600">
                <MessagesSquare size={16} color="#047857" />
                <div>Post</div>
              </div>
              <div className="btnPrimary bg-orange-200 text-orange-600">
                <div>
                  <FileEdit size={16} color="#ea580c" />
                </div>
                <div>Edit</div>
              </div>
              <div className="btnPrimary bg-red-200 text-red-600">
                <div>
                  <Trash size={16} color="#dc2626" />
                </div>
                <div>Delete</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="self-stretch font-bold text-sm ">
              Dear teman curhat,
            </div>
            <div className="textArea">
              Agar silaturahmi tidak terputus, boleh pinjam dulu seratus :D
            </div>
            <div className="btnBox">
              <div className="btnPrimary bg-green-200 text-green-600">
                <MessagesSquare size={16} color="#047857" />
                <div>Post</div>
              </div>
              <div className="btnPrimary bg-orange-200 text-orange-600">
                <div>
                  <FileEdit size={16} color="#ea580c" />
                </div>
                <div>Edit</div>
              </div>
              <div className="btnPrimary bg-red-200 text-red-600">
                <div>
                  <Trash size={16} color="#dc2626" />
                </div>
                <div>Delete</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div>
        <div>
          {items.map(({ id, content }) => {
            return <NoteCard key={id} id={id} content={content} />;
          })}
        </div>
        <NoteInput />
      </div>
    </div>
  );
}
