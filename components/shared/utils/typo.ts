const MODULER_RATIO = 1.125;

// moduler scale
export const modulerScale = (num: number) => {
    return `${Math.pow(MODULER_RATIO, num)}em`;
}