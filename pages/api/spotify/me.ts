import { NextApiRequest, NextApiResponse } from "next";

// doc: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-current-users-profile
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const url = 'https://api.spotify.com/v1/me'
        const headers = {
            Authorization: `Bearer ${req.cookies['spotify-access-token']}`
        }
        const result = await fetch(url, {
            method: 'GET',
            headers: headers,
        })
        const resData: SpotifyApi.CurrentUsersProfileResponse = await result.json()
        if (result.status !== 200) {
            return res.status(400).json(null)
        }
        return res.status(200).json(resData)
    } catch(err) {
        return res.status(400).json(null)
    }
}