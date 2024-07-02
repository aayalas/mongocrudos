import connectMongoDB from "../../libs/mongodb";
import Refacciones from "../../models/refacciones";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    console.log('POST');
    const { car, model, year, description } = await request.json();
    await connectMongoDB();
    // crear entry en mongo
    await Refacciones.create({ car, model, year, description });
    return NextResponse.json({ message: "Refaccion Created" }, { status: 201 });
  } catch (error) {
    console.error('Error creating refaccion:', error);
    return NextResponse.json({ error: "Error creating refaccion" }, { status: 500 });
  }
}

export async function GET() {
  try {
    console.log('GET api/refacciones function');
    await connectMongoDB();
    // refacciones variablle que se retorna y sera itilizada en front end
    // en este caso RefaccionesList.jsx
    const refacciones = await Refacciones.find();
    return NextResponse.json({ refacciones });
  } catch (error) {
    console.error('Error fetching refacciones:', error);
    return NextResponse.json({ error: "Error fetching refacciones" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    console.log("inside de borrar refaccion:", id);
    await connectMongoDB();
    console.log("la id a borrar:", id);
    await Refacciones.findByIdAndDelete(id);
    return NextResponse.json({ message: "Refaccion deleted" }, { status: 200 });
  } catch (error) {
    console.error('Error deleting refaccion:', error);
    return NextResponse.json({ error: "Error deleting refaccion" }, { status: 500 });
  }
}
