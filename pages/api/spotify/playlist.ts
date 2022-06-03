import { NextApiRequest, NextApiResponse } from "next";
import { getSpotifyAccessToken } from "shared/utils/cookie";

// Query:
// uri...plau uri
export default async(req: NextApiRequest, res: NextApiResponse) => {
    try {
        const playlists: any[] = []
        const url = 'https://api.spotify.com/v1/me/playlists'
        const limit = 50
        let offset = 0
        let isAllFetched = false
        const accessToken = await getSpotifyAccessToken(req)

        if (!accessToken) {
            return res.status(400).json({error: 'Access-Token and Refresh-Token is not exist'})
        }

        const headers = {   
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }

        while (!isAllFetched) {
            const result = await fetch(`${url}?limit=${limit}&offset=${offset}`, {
                method: 'GET',
                headers: headers,
            })
    
            const json: SpotifyApi.PagingObject<SpotifyApi.PlaylistObjectFull> = await result.json()
            // json.items.forEach(item => playlists.push(item))
            playlists.push(...json.items)
            isAllFetched = json.items.length !== limit
            offset += limit
        } 

        return res.status(200).json(playlists)
    } catch (err) {
        return res.status(400).json(err)
    }
}