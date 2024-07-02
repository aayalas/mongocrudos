"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditRefaccionForm({ id, car, model, year, description }) {

  const [newCar, setNewCar] = useState(car);
  const [newYear, setNewYear] = useState(year);
  const [newModel, setNewModel] = useState(model);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/refacciones/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newCar, newModel, newYear, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewCar(e.target.value)}
        value={newCar}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Car"
      />

      <input
        onChange={(e) => setNewModel(e.target.value)}
        value={newModel}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Ref Model"
      />

      <input
        onChange={(e) => setNewYear(e.target.value)}
        value={newYear}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Ref Year"
      />

  

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Ref Description"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Refaccion
      </button>
    </form>
  );
}