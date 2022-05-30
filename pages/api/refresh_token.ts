import { NextApiRequest, NextApiResponse } from "next";
import { SpotifyAuth } from "../../types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const reqBody = JSON.parse(req.body)
        const url = "https://accounts.spotify.com/api/token"
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_SECRET_ID}`).toString('base64')}`
        }
        const data: ReqData = {
            grant_type: "refresh_token",
            refresh_token: reqBody.refreshToken
        }

        const params = new URLSearchParams()
        Object.keys(data).forEach(key => {
            params.append(key, data[key as keyof ReqData])
        })

        //console.log(params)
        //console.log(headers)

        const result = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: params
        })
        const resData = await result.json()
        //console.log(resData)
        const auth: SpotifyAuth = {
            access_token: resData.access_token,
            expires_in: resData.expires_in,
            refresh_token: resData.refresh_token,
        }
        res.status(200).json(auth)
    }
}

type ReqData = {
    grant_type: string
    refresh_token: string
}