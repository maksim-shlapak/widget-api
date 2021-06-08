/**
 * @internal
 */
export interface IOneOnOneSessionInviteParams {
    authorId: string;
    invitedUserId: string;
}
/**
 * @internal
 */
export interface IOneOnOneSessionInviteResult {
    inviteUrl: string;
    inviteUrlText?: string;
    title?: string;
    message?: string;
    inviteButton?: string;
}

export type ThemeType = 'default' | 'dark';

/**
 * User experience configuration
 */
export interface UxConfig {
    /**
     * If set to true comments start will be at the top instead of bottom.
     * @default false
     */
    commentsTopToBottom?: boolean;
    /**
     * if set to true widget position will be fixed and user won't be able to drag it.
     * @default false
     */
    draggableDisabled?: boolean;
    /**
     * if set to true, the widget will behave like a side panel:
     * 1. Will take full available height of the player.element
     * 2. Will not be draggable.
     * 3. Will be position side by side with the player.
     * 4. Will openOnLoad by default.
     * 5. if there is not space to the side of the player will fallback to regualer inner overlay behaviour.
     * 6. the width is responsive taking available space. width.max can be used to limit.
     * @default false
     */
    sidePanelLayout?: boolean;
    /**
     * Enables side panel ux for player fullscreen. by default overlay is used in fullscreen.
     * @default false
     */
    sidePanelFullScreen?: boolean;
    /**
     * Width of the side panel in player fullscreen in pixels
     * has effect only if sidePanelFullScreen is enabled
     * @default 370
     */
    sidePanelFullScreenWidth?: number;
    /**
     * If enabled the sidePanel will:
     * 1. overlay the video player instead of positioning on the side of it.
     * 2. will always be full height and never fallback to draggable.
     * 3. will not openOnLoad by default
     * @default false
     */
    sidePanelOverlay?: boolean;
    /**
     * Width of the overlay side panel
     * has effect only if sidePanelOverlay is enabled
     * @default 370
     */
    sidePanelOverlayWidth?: number;
    /**
     * Load widget in open state on first boot.
     * By default the widget is loaded closed, and after timeout a kuku is shown
     * promting user to comment.
     * @default false
     */
    openOnLoad?: boolean;
    /**
     * Load widget in close state on first boot (without kuku).
     * By default the widget is loaded closed, and after timeout a kuku is shown
     * promting user to comment.
     * Note: this setting does not override openOnLoad, it affects only the kuku behavior
     * @default false
     */
    kukuCloseOnLoad?: boolean;
    /**
     * If povided will limit the responsive widget width.
     * Has effect when widget is positioned outside of the player.
     * Has no effect when widget is overlay inside the player or when player is in full screen.
     * @default 460
     */
    maxWidth?: number;
    /**
     * Triggers that will automatically pause the player.
     * All true by default.
     * > For live video, the player is never paused.
     */
    pauseTriggers?: {
        /**
         * Pause when user wants to comment, reply or add new note
         */
        formOpen?: boolean;
        /**
         * Pause when user is prompted to login/signup
         */
        authTrigger?: boolean;
        /**
         * On mobile when widget is open it overlays the player.
         * Pause when widget is open on mobile devices, so the video is not played in the background.
         * > when opening in interactive mode (kuku/mini widget that do not overlay all the video), the player will not be paused. 
         */
        widgetOpenOnPhone?: boolean;
        cta?: boolean;
        /**
         * Will pause only if tapping on timeline segment that contains UGC, regular taps will not pause the video.
         */
        timelineUgcTap?: boolean;
    };
    /**
     * Select the widget theme
     * If set to 'dark', the dark theme will always be used even when the widget is not in overlay.
     * @default 'default'
     */
    theme?: ThemeType;
    /**
     * For SSO enabled integrations only.
     * If Provided, Will be called when user triggers Authentication.
     * If not provided a message in the form is shown.
     * @returns {Promise<void> | void} If possible the promise should reslove/reject when the auth flow is finished.
     */
    ssoAuthRequestHandle?(): Promise<void> | void;
    /**
     * For SSO enabled integrations only.
     * If Provided, Will be called when user triggers Logout action and "Logout" option will appear in the drawer menu.
     * @returns {Promise<void> | void} If possible the promise should reslove/reject when the logout flow is finished.
     */
    logoutRequestHandle?(): Promise<void> | void;
    /**
     * @internal
     * If people and presence are enabled for the site, this api can be implemented to add invites to one on one meetings
     * @param params 
     */
    getOneOnOneSessionInvite?(params: IOneOnOneSessionInviteParams): Promise<IOneOnOneSessionInviteResult> | IOneOnOneSessionInviteResult;
}