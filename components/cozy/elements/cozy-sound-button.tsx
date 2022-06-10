import { useAudio } from "cozy/hooks/useAudio"
import { CozySound } from "cozy/types/sound"
import React, { useEffect, useMemo, useRef, useState } from "react"
import { Box } from "shared/elements/box/common"
import { FlexBox } from "shared/elements/box/flex"
import { Image } from "shared/elements/image/common"
import { useTheme } from "shared/hooks/useTheme"
import styled from "styled-components"

export const CozySoundButton = (props: {
    sound: CozySound
}) => {
    const audio = useAudio(props.sound.src, {isLoop: true})
    const {theme} = useTheme()
    const [volume, setVolume] = useState(50)
    const [isChangingVolume, setChangingVolumeState] = useState(false)
    const lastVolumeRef = useRef(50)
    const startPosRef = useRef(0)
    const buttonRef = useRef() as React.MutableRefObject<HTMLDivElement>
    const onChangeVolume = (e: React.DragEvent<HTMLDivElement>) => {
        if (e.clientY === 0 || audio.isPaused) {
            // To solve delay of styling, toggle volume-change-state here
            setChangingVolumeState(false)
            return
        }
        const maxTranslation = window.innerHeight * 0.5
        const amount = (startPosRef.current - e.clientY) / maxTranslation * 100
        const newVolume = lastVolumeRef.current + amount

        // max volume is 100, and minimum volume is 0
        setVolume(Math.min(Math.max(newVolume, 0), 100))
    }

    // use only mobile device
    const onStopScrollWhenChangeVolume = (e: TouchEvent) => {
        console.log((e.target as Element).id === buttonRef.current.id)
        console.log((e.target as Element).id)
        console.log(buttonRef.current.id)

        if (isChangingVolume && (e.target as Element).id === buttonRef.current.id) {
            // stop scroll
            e.preventDefault()
        } else {
            e.stopPropagation();
        }
    }

    const onChangeVolumeWithMobile = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.touches[0].clientY === 0 || audio.isPaused) {
            // To solve delay of styling, toggle volume-change-state here
            setChangingVolumeState(false)
            return
        }
        const maxTranslation = window.innerHeight * 0.5
        const amount = (startPosRef.current - e.touches[0].clientY) / maxTranslation * 100
        const newVolume = lastVolumeRef.current + amount

        // max volume is 100, and minimum volume is 0
        setChangingVolumeState(true)
        setVolume(Math.min(Math.max(newVolume, 0), 100))
    }

    useEffect(() => {
        audio.changeVolume(volume / 100)
    }, [volume])

    return (
        <SoundButtonBox
            id={props.sound.id} // set id to prevent scroll on mobile(cozy-sound-panel.tsx: line 23~30)
            width={'80px'} 
            height={'80px'} 
            position={'relative'}
            isPaused={audio.isPaused}
            isChangingVolume={isChangingVolume}
            onClick={() => audio.togglePlay()}
        >
            <IconBox
                way={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                position={'absolute'}
                width={'60px'} 
                height={'60px'} 
                radius={'30px'} 
                background={theme.color.base}
            >
                <Image 
                    width={'46px'}
                    height={'46px'}
                    fit={'cover'}
                    src={props.sound.icon}
                />
            </IconBox>
            <Indicator percentage={volume}/>
            <VolumeBox
                id={props.sound.id}  // set id to prevent scroll on mobile(cozy-sound-panel.tsx: line 23~30)
                draggable={true}
                width={'80px'} 
                height={'80px'}
                radius={'40px'}
                position={'absolute'}
                cursor={isChangingVolume ? 'grabbing' : audio.isPaused ? 'pointer' : 'grab'}
                ref={buttonRef}
                onDrag={(e) => {
                    onChangeVolume(e)
                }}
                onDragStart={(e) => {
                    // set start point of drag
                    startPosRef.current = e.clientY
                    setChangingVolumeState(true)
                }}
                onDragEnd={() => {
                    // set last volume for adjust volume
                    lastVolumeRef.current = volume
                }}
                onTouchMove={(e) => {
                    onChangeVolumeWithMobile(e)
                }}
                onTouchStart={(e) => {
                    // set start point of drag
                    startPosRef.current = e.touches[0].clientY
                }}
                onTouchEnd={() => {
                    // set last volume for adjust volume
                    lastVolumeRef.current = volume
                    setChangingVolumeState(false)
                }}
            ></VolumeBox>
        </SoundButtonBox>
    )
}

// reference: https://dev.classmethod.jp/articles/react-svg-circle-gauge/
const Indicator = (props: {
    percentage: number
}) => {
    const {theme} = useTheme()
    const { color, outerR, strokeWidth } = {
        color: "#313131",
        outerR: 40,
        strokeWidth: 10,
    }
    const size = useMemo(() => {
        return outerR * 2;
      }, [outerR]);
    
      const r = useMemo(() => {
        return outerR - strokeWidth / 2;
      }, [outerR, strokeWidth]);
    
      const circumference = useMemo(() => {
        return 2 * Math.PI * r;
      }, [r]);
    
      const dashoffset = useMemo(() => {
        return circumference * ((100 - props.percentage) / 100);
      }, [circumference, props.percentage]);
    
      return (
        <Box 
            width={`${size}px`} 
            height={`${size}px`} 
            radius={`${size/2}px`}
            background={theme.color.gray05}
        >
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                style={{
                    transform: 'rotateZ(-90deg)'
                }}
            >
                <circle
                    r={r}
                    cx={outerR}
                    cy={outerR}
                    stroke={color}
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={dashoffset}
                    transform={`rotate(-90) ${outerR} ${outerR}`}
                />
            </svg>
        </Box>
      )
}

const SoundButtonBox = styled(Box)<{
    isPaused: boolean,
    isChangingVolume: boolean
}>`
    transition: 0.26s;
    will-change: opacity;
    opacity: ${props => props.isPaused ? 0.36 : 1};
    transform: ${props => props.isChangingVolume ? 'scale(1.05)' : 'scale(1.0)'};

    @media (max-width: 600px) {
        transform: ${props => props.isChangingVolume ? 'scale(1.1)' : 'scale(1.0)'};
    }
`

const VolumeBox = styled(Box)`
    top: 0;
    opacity: 0;
`

const IconBox = styled(FlexBox)`
    top: 10px;
    left: 10px;
`