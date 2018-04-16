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
    minibar?: boolean;
    popout?: boolean;  // Does nothing at the moment. For future use
}

export interface AnnotoConfig {
    clientId: string;
    position?: string;
    phonePosition?: string;
    relativePositionElement?: string | Element;
    align?: WidgetAlignConfig;
    width?: WidgetSizeConfig;
    height?: WidgetSizeConfig;
    margins?: WidgetMargins;
    adaptToElement?: boolean;
    enableDraggable?: boolean;
    simple?: boolean;
    rtl?: boolean;
    locale?: string;
    widgets: WidgetConfig[];
    thread?: ThreadConfig;
    demoMode: boolean;
    launchSource?: LaunchSourceConfig;
    features?: AnnotoFeatures;
}
