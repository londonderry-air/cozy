import { CookieSerializeOptions, serialize } from "cookie";
import { NextApiResponse } from "next";

export const setCookie = (
    res: NextApiResponse,
    name: string,
    value: unknown,
    expires: Date
) => {
    const stringValue =
      typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);
  
    const options: CookieSerializeOptions = {
      httpOnly: true,
      secure: true,
      expires: expires,
      path: "/",
    };
  
    res.setHeader("Set-Cookie", serialize(name, stringValue, options));
};