export const isIos = () => {
    const ua = window.navigator.userAgent.toLowerCase()
    return ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1
}