import { NextApiRequest, NextApiResponse } from "next";
import { randomStr } from "shared/utils/string";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const scope = 'user-modify-playback-state playlist-read-collaborative playlist-read-private user-read-playback-state streaming user-read-email user-read-private'
    const redirectUri = 'http://localhost:3000/api/spotify/callback'
    const state = randomStr()

    const query = new URLSearchParams({
        response_type: "code",
        client_id: process.env.SPOTIFY_CLIENT_ID ?? '',
        scope: scope,
        redirect_uri: redirectUri,
        state: state
    })

    res.redirect(`https://accounts.spotify.com/authorize?${query.toString()}`)
}