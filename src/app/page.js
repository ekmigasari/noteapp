import { NoteCard } from "@/components/NoteCard";
import { NoteInput } from "@/components/NoteInput";
import { ChevronsLeftIcon } from "lucide-react";

async function getNotes() {
  const rest = await fetch("https://v1.appbackend.io/v1/rows/jJ5wMdzaLYEI", {
    cache: "no-store",
  });
  const res = await rest.json();
  return res;
}

export default async function Page() {
  const { data } = await getNotes();

  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-2 mb-8">
        <div className="text-center text-7xl font-bold tracking-normal font-sans text-pink-900 drop-shadow-md">
          CURCOL
        </div>
        <div className="w-[298px]  flex justify-center item-center text-white text-2xl rounded-3xl bg-red-300 px-1 py-0.5 font-sans">
          curhat-curhat online
        </div>
      </div>

      <NoteInput />

      <div className="border-t border-white my-12"></div>

      <section className="flex flex-col gap-4">
        {data.map(({ _id, name }) => {
          return <NoteCard key={_id} id={_id} content={name} />;
        })}
      </section>
      <footer className="text-zinc-400 text-sm text-center my-8">
        xmigas - devscale #sycnsquad
      </footer>
    </main>
  );
}
