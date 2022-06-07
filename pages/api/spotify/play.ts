import { NextApiRequest, NextApiResponse } from "next";
import { getSpotifyAccessToken } from "shared/utils/cookie";

// Query:
// uri...plau uri
export default async(req: NextApiRequest, res: NextApiResponse) => {
    try {
        const query = req.query
        const contextUri = query.context_uri
        const deviceId = query.device_id
        const url = `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`
        const accessToken = await getSpotifyAccessToken(req)

        if (!accessToken) {
            return res.status(400).json({error: 'Access-Token and Refresh-Token is not exist'})
        }

        const headers = {   
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }

        fetch(url, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({ context_uri: contextUri }),
        })

        return res.status(200).json({
            status: 'success',
            deviceId: deviceId,
            context_uri: contextUri
        })
    } catch (err: any) {
        console.log(err)
        if (err.name === 'AbortError') {
            return res.status(200)
        }
        return res.status(400).json(err)
    }
}