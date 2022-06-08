export type CozySound = {
    id: string
    icon: string
    src: string
}

export type Cozy = {
    id: string
    name: string,
    description: string,
    sounds: CozySound[]
}