import { CookieSerializeOptions, serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import { refreshSpotifyAccessToken } from "spotify/utils/token";

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

export const getSpotifyAccessToken = async (req: NextApiRequest) => {
  if (req.cookies['spotify-access-token']) {
    return req.cookies['spotify-access-token']
  }

  if (req.cookies['spotify-refresh-token']) {
    const newToken = await refreshSpotifyAccessToken()
    if (newToken) {
      return newToken
    }
  }

  return null
}