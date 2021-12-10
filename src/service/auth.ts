import UserModel from "@/app/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { TokenType } from "@/enum";
import config from "@/config";
import { NextFunction, Request, Response } from "express";
import { ErrorCode } from "@/enum";
interface LOGIN_I {
  userName: string;
  password: string;
}
interface PAYLOAD_TOKEN {
  _id: string;
  type: string;
}
export const registerService = async (payload: any) => {
  const hashPassword = await bcrypt.hashSync(
    payload.password,
    config.AUTH.SALT_ROUND
  );
  payload = {
    ...payload,
    password: hashPassword,
    user_name: payload.userName,
  };
  const User: any = new UserModel(payload);
  //trong ngoặc là lấy ra những column nào
  const oldUser = await UserModel.findOne({ user_name: payload.userName }, [
    "_id",
    "user_name",
  ]).lean();
  if (oldUser) throw Error(ErrorCode.Email_Address_Already_Exist);

  try {
    const result = (await User.save()).toObject();
    const dataToken = generateToken(result._id);
    User.token = dataToken.token;
    User.refreshToken = dataToken.refreshToken;
    await User.save();
    return dataToken;
  } catch (error) {
    return error;
  }
};
export const loginService = async (payload: LOGIN_I) => {
  const userData: any = await UserModel.findOne({
    user_name: payload?.userName,
  }).lean();

  if (!userData) throw Error(ErrorCode.Email_Address_Not_Exist);

  const isCorrectPassword = bcrypt.compareSync(
    payload.password,
    userData.password
  );
  if (!isCorrectPassword) throw Error(ErrorCode.Password_Incorrect);
  const token = generateToken(userData._id);
  const User = await UserModel.findOneAndUpdate(
    {
      user_name: payload.userName,
    },
    { ...token }
  );
  const result = User.toObject();
  delete result.password;
  delete result.refreshToken;
  delete result.token;
  return result;
};

const generateToken = (_id: string) => {
  const token = createdToken({
    _id: String(_id),
    type: TokenType.ACCESS_TOKEN,
  });
  const refreshToken = createdRefreshToken({
    _id: String(_id),
    type: TokenType.REFRESH_TOKEN,
  });
  return { token, refreshToken };
};

const createdToken = (payload: PAYLOAD_TOKEN) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    algorithm: "HS256",
    expiresIn: config.AUTH.EXPIRES_IN_TOKEN,
  });
  return token;
};
const createdRefreshToken = (payload: PAYLOAD_TOKEN) => {
  const refreshToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    algorithm: "HS256",
    expiresIn: config.AUTH.EXPIRES_IN_REFRESH_TOKEN,
  });
  return refreshToken;
};
