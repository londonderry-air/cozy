import { useRecoilState } from "recoil";
import { ThemeState, themeState } from "shared/states/theme";
import { pallets } from "shared/utils/color";

export const useTheme = () => {
    const [theme, setTheme] = useRecoilState(themeState);

    const getThemeColor = (state: ThemeState) => {
        return state === 'light' ? pallets.light : pallets.dark
    }

    const toggleTheme = () => {
        const current = theme.state === 'light' ? 'dark' : 'light'
        window.localStorage.setItem("cozy-theme", current);

        setTheme({
            state: current,
            color: getThemeColor(current)
        })
    }

    return { theme, toggleTheme }
}