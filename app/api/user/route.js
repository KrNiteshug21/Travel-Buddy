import User from "@/models/User";
import connectDB from "@/lib/DBConn";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  await connectDB();
  const users = await User.find({});
  return NextResponse.json(users, { status: 200 });
};

export const POST = async (req, res) => {
  await connectDB();

  const { name, profilepic, desc, destination, month, travelCount } =
    await req.json();

  if (!name || !profilepic || !desc || !destination || !month || !travelCount) {
    return NextResponse.json({ message: "Missing required data" });
  }

  // const duplicate = await User.find({ name });
  // if (duplicate) {
  //   return NextResponse.json({ message: "User already present" });
  // }

  const users = await User.create({
    name,
    profilepic,
    desc,
    destination,
    month,
    travelCount,
  });

  return NextResponse.json({
    message: `${users.name} with ${users.id} created`,
  });
};

export const PUT = async (req, res) => {
  await connectDB();

  const { name, profilepic, desc, destination, month, travelCount } =
    await req.json();
  if (!name || !profilepic || !desc || !destination || !month || !travelCount) {
    return NextResponse.status(400).json({ message: "Missing required data" });
  }

  const user = await User.findOne({ name }).exec();
  if (!user) {
    return NextResponse.json({ message: "User Not Found" });
  }

  user.name = name;
  user.profilepic = profilepic;
  user.desc = desc;
  user.destination = destination;
  user.month = month;
  user.travelCount = travelCount;

  const result = await user.save();
  const reply = `${result.name} updated`;
  return NextResponse.json(reply);
};

export const DELETE = async (req, res) => {
  const { id } = await req.json();
  console.log(id);

  if (!id) {
    return NextResponse.json({ message: "User Id is required" });
  }

  const user = await User.findById(id).exec();
  console.log(user);

  if (!user) {
    return NextResponse.json({ message: "User Not Found" }, { status: 404 });
  }

  const result = await user.deleteOne();
  return NextResponse.json({ message: "deleted" });
};
