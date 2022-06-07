import { CozySound } from "cozy/types/sound"
import { useState } from "react"
import { Box } from "shared/elements/box/common"
import { Image } from "shared/elements/image/common"

export const CozySoundButton = (props: {
    sound: CozySound
}) => {
    const [isPaused, setPaused] = useState(true)

    return (
        <>
        <svg>
            <path d="M 0,0 L 0,-60 a 60 60 -90 0 1 52,90 z" fill="red" stroke="black"/>
        </svg>
        <Box width={'50px'} height={'50px'} radius={'25px'} background={'#999999'}>
            <Image 
                width={'40px'}
                height={'40px'}
                fit={'cover'}
                src={props.sound.icon}
            />
        </Box>
        </>
    )
}