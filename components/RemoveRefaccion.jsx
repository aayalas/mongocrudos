"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function removeRefaccion({ id }) {
  console.log("Received id:", id); 

  const router = useRouter();
  const removeRefaction = async () => {
    const confirmed = confirm("Are you sure to remove Refaction ?");

    if (confirmed) {
     //http://localhost:3000/api/refacciones?id=66637df84fad5ab4b842820d
     const res = await fetch(`http://localhost:3000/api/refacciones?id=${id}`, {
      method: "DELETE",
    });

    //  const res = await fetch(`http://localhost:3000/api/refacciones?id=${id}`, {
    //     method: "DELETE",
    //   });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeRefaction} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
