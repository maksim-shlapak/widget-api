/**
 * @module annotoConfig
 */

import { PlayerAdaptorApi } from './player-adaptor';
import { MediaDetails } from './media-details';

/**
 * DEPRECATED
 */
export interface WidgetSizeConfig {
    max?: number;
}

/**
 * Specifies how to position the widget reletive to the player
 */
export interface WidgetAlignConfig {
    vertical?: 'top' | 'center' | 'bottom';
    /**
     * 'element_edge' - outside the player right next to it
     * 'inner' - as an overlay inside the player on it's edge
     * 'screen_edge' - fixed position on the screen edge instead of relative to the player 
     * @default 'element_edge'
     */
    horizontal?: 'element_edge' | 'inner' | 'screen_edge';
}

/**
 * Optional Margins from page edges for positioning the widget.
 * Has effect only when:
 * 1. player not in full screen
 * 2. widget is not overaly on top of the player
 * 3. ux is not sidePanel
 */
export interface WidgetMargins {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}

export type SortByType = 'most_recent' | 'top_rated' | 'by_timetag';

export interface ThreadConfig {
    /**
     * If set to true, when widget is loaded all the replies to comments will be shown.
     */
    showReplies?: boolean;
    /**
     * The default sorting to use on startup.
     * Default: 'most_recent'
     */
    sort?: SortByType;
}

export interface PlayerConfig {
    type: string;
    element?: string | Element;
    api?: PlayerAdaptorApi;
    wide?: boolean;
    params?: any;
    mediaSrc?(): string; // for setting the player media source.
    mediaDetails?(details?: MediaDetails): MediaDetails | Promise<MediaDetails>;
}

export interface TimelineConfig {
    embedded?: boolean;  // Deprecated. The value is ignored. Embedded timeline is not supported.
    height?: number;
    overlayVideo?: boolean;
    disableDockPadding?: boolean;
    positionTopInFullScreen?: boolean;
    scrubberAlwaysOn?: boolean;
    scrubberHeight?: number;
    scrubberColor?: string;
}

export interface StatsConfig {
    /**
     * 
     */
    host: HTMLElement;
}

export interface WidgetConfig {
    player: PlayerConfig;
    timeline?: TimelineConfig;
    /**
     * DEPRACATED. use ux.openOnLoad instead
     */
    openOnLoad?: boolean;
    demoDiscussion?: string;
    /**
     * If provided the discusion widget will be embedded inside the host element instead of as overlay
     * The size of the widget is responsive and set to 100% width and height of the host element.
     */
    host?: HTMLElement;
    stats?: StatsConfig;
}

export interface LaunchSourceConfig {
    accessToken?: string;
    consumerKey?: string;
    origin?: string;
}

export interface AnnotoFeatures {
    comments?: boolean;
    privateNotes?: boolean;
    tabs?: boolean;
    commentsSubmit?: boolean;
    privateNotesSubmit?: boolean;
    userPreferences?: boolean;
    darkTheme?: boolean;
    cta?: boolean;
    threadVote?: boolean;
    voteEmotions?: boolean;
    commentSentiment?: boolean;
    minibar?: boolean;
    stats?: boolean;   // if enabled StatsConfig must be provided
    popout?: boolean;  // Does nothing at the moment. For future use
}

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
}

export interface AnnotoConfig {
    clientId: string;
    /**
     * Position the widget on the right or on the left side
     * @default 'right'
     */
    position?: 'right' | 'left';
    /**
     * Position the widget on the right or on the left side for mobile devices
     * @default position same as position prop
     */
    phonePosition?: 'right' | 'left';
    relativePositionElement?: string | Element;
    /**
     * Specifies how to align the widget relative to the player
     * @default { }
     */
    align?: WidgetAlignConfig;
    /**
     * DEPRECATED
     * use ux.maxWidth instead
     */
    width?: WidgetSizeConfig;
    margins?: WidgetMargins;
    /**
     * Configuration options that affect the user experience
     */
    ux?: UxConfig;
    /**
     * Language code for the widget.
     * Default: 'en'
     */
    locale?: string;
    /**
     * Widget configuration settings.
     * NOTE: only single widget is supported. the array is for future use.
     */
    widgets: WidgetConfig[];
    thread?: ThreadConfig;
    demoMode: boolean;
    launchSource?: LaunchSourceConfig;
    /**
     * Enable/disable Features
     */
    features?: AnnotoFeatures;
    helpUrl?: string;
    /**
     * The widget is position is absolute on page.
     * Set the zIndex to appropriate value to make it visible and not iterfer with other elements.
     * Default value: 100
     */
    zIndex?: number;
    /**
     * same as zIndex, only for when the player is in fullscreen.
     * Default value: 100
     */
    fsZIndex?: number;
}
