import { NextApiRequest, NextApiResponse } from "next";
import { getSpotifyAccessToken } from "shared/utils/cookie";

// doc: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-current-users-profile
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const url = 'https://api.spotify.com/v1/me'
        const accessToken = await getSpotifyAccessToken(req)

        if (!accessToken) {
            return res.status(400).json({error: 'Access-Token and Refresh-Token is not exist'})
        }

        const headers = {   
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
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