export interface OriginProvider {
    /**
     * Url to the video page.
     * Useful if Annoto is embedded inside iframe for example.
     * default: window.location.href is used.
     */
    getPageUrl?(): string;
    /**
     * Url to the video page and specific playback time of currentTime.
     * If provided will be used by annoto for email notifications, in the dashboard, etc.
     * @param currentTime current playback time of the player in seconds
     * @param mediaSrc the media source of the player
     */
    getMediaDeepLinkUrl?(currentTime: number, mediaSrc: string): string;
}