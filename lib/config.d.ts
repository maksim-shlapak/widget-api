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
    bottom: number;
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
    mediaSrc?: () => string; // for setting the player media source.
    mediaDetails?: () => MediaDetails;
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

export interface WidgetConfig {
    player: PlayerConfig;
    timeline?: TimelineConfig;
    openOnLoad?: boolean;
    demoDiscussion?: string;
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
    popout?: boolean;  // Does nothing at the moment. For future use
}

export interface UxConfig {
    commentsTopToBottom?: boolean; // false by default. If set to true comments start will be at the top instead of bottom
    draggableDisabled?: boolean; // false by default.
    /**
     * @description if set to true, the widget will behave like a side panel if open.
     * 1. Will take full available height of the player.element / relativePositionElement.
     * 2. Will not be draggable.
     * // false by default. 
     */
    sidePanel?: boolean; 
    /**
     * @description Triggers for automatically pause the player.
     * All true by default.
     */
    pauseTriggers?: {
        formOpen?: boolean;
        authTrigger?: boolean;
        widgetOpenOnPhone?: boolean;
        cta?: boolean;
        timelineUgcTap?: boolean;
    };
    /**
     * @description For SSO enabled clientId only. if Provided, Will be called when user triggers Authentication.
     * If not provided a message in the form is shown.
     * @returns {Promise<void>} If possible the promise should reslove/reject when the auth flow is finished.
     */
    ssoAuthRequestHandle?: () => Promise<void>;
    /**
     * @description If Provided, Will be called when user triggers Logout action.
     * @returns {Promise<void>} If possible the promise should reslove/reject when the logout flow is finished.
     */
    logoutRequestHandle?: () => Promise<void>;
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
    ux?: UxConfig;
    rtl?: boolean;
    locale?: string;
    widgets: WidgetConfig[];
    thread?: ThreadConfig;
    demoMode: boolean;
    launchSource?: LaunchSourceConfig;
    features?: AnnotoFeatures;
    helpUrl?: string;
}
