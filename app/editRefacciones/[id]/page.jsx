import EditRefaccionesForm from "@/components/EditRefaccionForm";


const getRefacionesById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/refacciones/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }


    return res.json();
  } catch (error) {
    console.log(error);
  }
};



export default async function EditRefacciones({ params }) {
  const { id } = params;
  console.log("params id:", id);
  console.log("params :", params);

  const { refacciones } = await getRefacionesById(id);
  console.log("actualizando en refacciones:", refacciones)
  const { car, model, year, description } = refacciones;

  return <EditRefaccionesForm id={id} car={car} model={model} year={year} description={description} />;
}
