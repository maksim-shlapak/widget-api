/**
 * @module annotoConfig
 */

import { PlayerAdaptorApi } from './player-adaptor';
import { MediaDetails } from './media-details';

export interface WidgetSizeConfig {
    min?: number;
    max?: number;
}

export interface WidgetAlignConfig {
    vertical?: string;
    horizontal?: string;
}

export interface WidgetMargins {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    min?: number;
    rightSmall?: number;
    minAdaptive?: number;
}

export interface ThreadConfig {
    showReplies?: boolean;
    rtOnOnFirstPlay?: boolean;
    type?: 'video' | 'text';
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
    openOnLoad?: boolean;
    demoDiscussion?: string;
    /**
     * @description If provided the discusion widget will be embedded inside the host element instead of as overlay
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
     * false by default.
     */
    commentsTopToBottom?: boolean;
    /**
     * if set to true widget position will be fixed and user won't be able to drag it.
     * false by default.
     */
    draggableDisabled?: boolean;
    /**
     * if set to true, the widget will behave like a side panel if open.
     * 1. Will take full available height of the player.element / relativePositionElement.
     * 2. Will not be draggable.
     * // false by default. 
     */
    sidePanel?: boolean; 
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
    position?: 'right' | 'left' | 'bottom';
    phonePosition?: 'right' | 'left';
    relativePositionElement?: string | Element;
    align?: WidgetAlignConfig;
    width?: WidgetSizeConfig;
    height?: WidgetSizeConfig;
    margins?: WidgetMargins;
    /**
     * Configuration options that affect the user experience
     */
    ux?: UxConfig;
    rtl?: boolean;
    locale?: string;
    widgets: WidgetConfig[];
    thread?: ThreadConfig;
    demoMode: boolean;
    launchSource?: LaunchSourceConfig;
    /**
     * Enable/disable Features
     */
    features?: AnnotoFeatures;
    helpUrl?: string;
    zIndex?: number;
    fsZIndex?: number;
}
