import connectMongoDB from "../../../libs/mongodb";
import Refaccion from "../../../models/refacciones";
// import Refs from "../../../models/refacciones";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  // get peremeter from request.json
  const { newCar: car, newModel:model , newYear:year, newDescription: description} = await request.json();
  await connectMongoDB();
  await Refs.findByIdAndUpdate(id, { car, model,year,description });
  return NextResponse.json({ message: "Refacciones updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const refacciones = await Refaccion.findOne({ _id: id });
  return NextResponse.json({ refacciones }, { status: 200 });
}