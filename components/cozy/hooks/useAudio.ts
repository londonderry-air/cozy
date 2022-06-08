import { useEffect, useState } from "react"

export const useAudio = (src: string, config: {
    isLoop?: boolean
} = {}) => {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
    const [isPaused, setPauseState] = useState(true)

    const togglePlay = () => {
        if (!audio) {
            return
        }
        if (isPaused) {
            audio.play()
        } else {
            audio.pause()
        }
        setPauseState(!isPaused)
    }

    const changeVolume = (volume: number) => {
        if (audio) {
            audio.volume = volume
        }
    }

    useEffect(() => {
        const a = new Audio(src)
        a.loop = config.isLoop ?? false
        setAudio(a)
    }, [])

    return {
        media: audio,
        togglePlay: togglePlay,
        changeVolume: changeVolume,
        isPaused: isPaused
    }
}