"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddRefaccion() {
    const [car, setCar] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        console.log('Submit handler refaction')
        e.preventDefault();

        if (!car || !model || !year || !description) {
            alert("car,model,year and description are required.");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/refacciones", {
                method: "POST",// aqui se indica el verbo a jecutar en refacciones
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ car, model, year, description }),
            });

            if (res.ok) {
               // refresdh and redirct
                router.refresh();
                router.push("/refacciones");
            } else {
                throw new Error("Failed to create a topic");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setCar(e.target.value)}
                value={car}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Refaccion"
            />

            <input
                onChange={(e) => setModel(e.target.value)}
                value={model}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Model"
            />
            <input
                onChange={(e) => setYear(e.target.value)}
                value={year}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Year"
            />

            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Description"
            />

            <button
                type="submit"
                className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
            >
                Add Refaccion
            </button>
        </form>
    );
}
