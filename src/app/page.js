import { NoteCard } from "@/components/NoteCard";
import { NoteInput } from "@/components/NoteInput";

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
    <main>
      <div class="flex flex-col justify-center items-center gap-2 mb-8">
        <div className="text-center text-7xl font-bold tracking-normal font-sans text-pink-900 drop-shadow-md">
          CURCOL
        </div>
        <div className="w-[298px]  flex justify-center item-center text-white text-2xl rounded-3xl bg-red-300 px-1 py-0.5 font-sans">
          curhat-curhat online
        </div>
      </div>

      <NoteInput />

      <div class="border-t border-white my-12"></div>

      <section className="flex flex-col-reverse gap-4">
        {items.map(({ id, content }) => {
          return <NoteCard key={id} id={id} content={content} />;
        })}
      </section>
    </main>
  );
}
