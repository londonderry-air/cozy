import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "shared/utils/cookie";
import { SpotifyAuth } from "spotify/types/auth";

export default async(req: NextApiRequest, res: NextApiResponse) => {
    const code = req.query.code;
    const redirectUri = 'http://localhost:3000/api/spotify/auth/callback'
    const url = "https://accounts.spotify.com/api/token"
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_SECRET_ID}`).toString('base64')}`
    }
    const params = new URLSearchParams({
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
        code: code as string
    })
    const result = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: params
    })
    const resData = await result.json()
    const auth: SpotifyAuth = {
        access_token: resData.access_token,
        expires_in: resData.expires_in,
        refresh_token: resData.refresh_token,
    }
    console.log(auth)

    if (auth.refresh_token) {
        const expires = new Date()
        expires.setDate(expires.getDate() + 14)
        setCookie(res, 'spotify-refresh-token', auth.refresh_token, expires)
    }
    
    res.status(200).redirect("/play");
}

