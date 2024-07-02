import Link from "next/link";
import RemoveBtn from "./RemoveRefaccion";
import { HiPencilAlt } from "react-icons/hi";

const getRefactions = async () => {


  try {
    const res = await fetch("http://localhost:3000/api/refacciones", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch refacciones");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading refacciones: ", error);
  }
};

export default async function Tefacciones() {
  const { refacciones } = await getRefactions();

  return (
    <>
      {refacciones.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.car}</div>
          </div>
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.model}</div>
          </div>
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.year}</div>
          </div>
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editRefacciones/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>

           
          </div>
        </div>
      ))}
    </>
  );
}