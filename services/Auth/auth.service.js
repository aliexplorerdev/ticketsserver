import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { User } from "../../models/users";

class AuthClass {
  async register(payload) {
    const { name, email, password, role } = payload;

    const checkEmail = await User.findOne({ email: email });

    if (checkEmail) {
      return { status: false, message: "User Alread Exist with that email" };
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const saveUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
      role: role,
    });

    const user = await saveUser.save();

    return { status: true, data: user, message: "User Created Successfully" };
  }
}

export const Auth = new AuthClass();
