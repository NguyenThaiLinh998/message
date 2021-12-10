import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface UserInterFace {
  name: string;
  token: string;
  refreshToken: string;
  password: string;
  user_name: string;
}

const UserSchema = new Schema(
  {
    name: { type: String, required: true, min: 1 },
    token: { type: String },
    refreshToken: { type: String },
    password: { type: String, required: true },
    user_name: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model<UserInterFace>("User", UserSchema, "User");
