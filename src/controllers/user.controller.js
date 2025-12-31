import userService from "../services/user.service.js";
import { decryptAES } from "../utils/decrypt.js";

export const register = async (req, res, next) => {
  try {
    const encryptedData = req.body?.password;
    const decryptedBody = decryptAES(encryptedData);
    const user = await userService.registerUser(decryptedBody);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const encryptedData = req.body.data;
    const decryptedBody = decryptAES(encryptedData);
    const result = await userService.loginUser(decryptedBody);
    res.status(200).json({
      success: true,
      // message: "User Logined successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
