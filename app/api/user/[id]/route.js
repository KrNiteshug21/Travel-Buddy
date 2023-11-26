import User from "@/models/User";
import connectDB from "@/lib/DBConn";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  await connectDB();
  const userId = params.id;

  const user = await User.findOne({ _id: userId }).exec();
  if (!user) return NextResponse.json({ message: "User not found" });
  return NextResponse.json(user, { status: 200 });
};

// export const PUT = async (req, res) => {
//   await connectDB();

//   const { name, profilepic, desc, destination, month, travelCount } =
//     await req.json();
//   if (!name || !profilepic || !desc || !destination || !month || !travelCount) {
//     NextResponse.status(400).json({ message: "Missing required data" });
//   }

//   const user = await User.findOne({ name }).exec();
//   if (!user) {
//     return NextResponse.status(400).json({ message: "User Not Found" });
//   }

//   user.name = name;
//   user.profilepic = profilepic;
//   user.desc = desc;
//   user.destination = destination;
//   user.month = month;
//   user.travelCount = travelCount;

//   const result = await user.save();
//   const reply = `${result.name} updated`;
//   NextResponse.json(reply);
// };

// export const DELETE = async (req, res) => {
//   const { id } = req.json();
//   if (!id) {
//     return NextResponse.status(400).json({ message: "User Id is required" });
//   }

//   const user = await User.findById(id).exec();
//   if (!user) {
//     return NextResponse.status(400).json({ message: "User Not Found" });
//   }

//   const result = await user.deleteOne();
//   const reply = `${result.title} with ${result._id} deleted`;
//   NextResponse.json(reply);
// };
