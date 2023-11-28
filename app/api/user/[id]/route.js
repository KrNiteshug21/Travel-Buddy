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

export const PUT = async (req, { params }) => {
  await connectDB();

  const userId = params.id;
  const { name, desc, destination, month, travelCount } = await req.json();

  const user = await User.findOne({ _id: userId }).exec();
  if (!user) {
    return NextResponse.json({ message: "User Not Found" });
  }

  if (name) user.name = name;
  if (desc) user.desc = desc;
  if (destination) user.destination = destination;
  if (month) user.month = month;
  if (travelCount) user.travelCount = travelCount;

  const result = await user.save();
  return NextResponse.json({ mssage: `${result.name} updated` });
};

export const DELETE = async (req, { params }) => {
  await connectDB();
  const userId = params.id;
  if (!userId) {
    return NextResponse.json({ message: "User Id is required" });
  }

  const user = await User.findOne({ _id: userId }).exec();
  const { name } = user;
  if (!user) {
    return NextResponse.json({ message: "User Not Found" });
  }

  const result = await user.deleteOne();
  return NextResponse.json({ message: `${name} deleted` });
};
