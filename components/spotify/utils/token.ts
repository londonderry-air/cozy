import { SpotifyAuth } from "spotify/types/auth"

export const refreshSpotifyAccessToken = async () => {
    const url = "/api/spotify/auth/refresh_token"
    const res = await fetch(url, { 
      method: "GET",
    })
    const auth: SpotifyAuth = await res.json()
    return auth.access_token
}