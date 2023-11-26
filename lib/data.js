import User from "@/models/User";
import connectDB from "@/lib/DBConn";
import mongoose from "mongoose";

export const fetchUser = async () => {
  try {
    await connectDB();
    mongoose.connection.once("open", () => {
      console.log("Connected to mongoDB");
    });
    const users = User.find();
    // if (!users.length) return { message: "No products found" };
    return users;
  } catch (err) {
    throw new Error(`Failed to fetch ${err}`);
  }
};

// export const addNewUser = async(request) => {
//   connectDB();
//   try {
//     const {name, profilepic, desc, destination, month, travelCount} = await request.body();

//     if(!name || !profilepic || !desc|| !destination|| !month|| !travelCount) {
//       return NextResponse.json({"message": "Missing required data"});
//     }

//     const data = {"name": name,"profilepic": profilepic,"desc": desc, "destination": destination,"month": month,"travelCount": travelCount};

//     const res = await fetch(process.env.DATABASE_URI, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data);
//     })
//   }catch(err) {
//     return NextResponse.json({"message": `Failed to fetch ${err}`});
//   }
// }
