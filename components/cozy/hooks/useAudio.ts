import { useEffect, useRef, useState } from "react"

export const useAudio = (src: string, config: {
    isLoop?: boolean
} = {}) => {
    const [isPaused, setPauseState] = useState(true)
    const [isStarted, setStartState] = useState(false)
    const contextRef = useRef<AudioContext | null>(null)
    const sourceRef = useRef<AudioBufferSourceNode | null>(null)
    const gainNodeRef = useRef<GainNode | null>(null)

    const togglePlay = () => {
        if (!contextRef.current || !sourceRef.current) {
            return
        }

        if (!isStarted) {
            gainNodeRef.current = contextRef.current.createGain();
            sourceRef.current.connect(gainNodeRef.current);
            gainNodeRef.current.connect(contextRef.current.destination);
            gainNodeRef.current.gain.value = 0.5;
            sourceRef.current.start(0);
            setStartState(true)
            setPauseState(false)
            return
        }

        if (isPaused) {
            contextRef.current.resume()
        } else {
            contextRef.current.suspend()
        }

        setPauseState(!isPaused)
    }

    const changeVolume = (volume: number) => {
        if (gainNodeRef.current) {
            gainNodeRef.current.gain.value = volume;
        }
    }

    useEffect(() => {
        const reader = new FileReader()
        reader.onload = () => {
            contextRef.current = new AudioContext();
            sourceRef.current = contextRef.current.createBufferSource();
            // オーディオをデコード
            contextRef.current.decodeAudioData(reader.result as ArrayBuffer, (buf) => {
                if (!sourceRef.current || sourceRef.current.buffer !== null) {
                    return
                }
                sourceRef.current.buffer = buf;
                sourceRef.current.loop = true;
            });
        }

        fetch(src)
            .then(res => res.blob())
            .then(blob => reader.readAsArrayBuffer(blob))
    }, [])

    return {
        togglePlay: togglePlay,
        changeVolume: changeVolume,
        isPaused: isPaused
    }
}