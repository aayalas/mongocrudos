// export async function DELETE(request) {
//   //obtener id en los persmetros
//   console.log("inside de borrar refaccion:",id);
//   const id = request.nextUrl.searchParams.get("id");
//   await connectMongoDB();
//   console.log("la id a borrar:",id);
//   await Refacciones.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Refaccion deleted" }, { status: 200 });
// }