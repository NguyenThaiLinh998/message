import User from "@/app/models/User";
import { registerService, loginService } from "@/service/auth";
import { success, fail } from "@/utils";
import { NextFunction, Request, Response } from "express";
class AuthController {
  register = async (req: Request, res: Response) => {
    try {
      const result = await registerService(req.body);
      return success(res, result);
    } catch (error) {
      return fail(res, error);
      // return res.json(error);
    }
  };
  login = async (req: Request, res: Response) => {
    // const token = jwt.sign(req.body, process.env.JWT_SECRET_KEY, {
    //   algorithm: "HS256",
    //   expiresIn: "180s",
    // });
    // const newUser = await User.findOneAndUpdate(
    //   { user_name: req.body.user_name },
    //   { token }
    // );
    try {
      const result = await loginService(req.body);
      return success(res, result);
    } catch (error) {
      return fail(res, error);
    }
  };
}
export default new AuthController();
