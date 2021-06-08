import { PlayerAdaptorApi } from '../player-adapter';
import { MediaDetails } from './media-details';

/**
 * @internal
 */
export interface StatsConfig {
    /**
     * 
     */
    host: HTMLElement;
}

export interface TimelineConfig {
    /**
     * @internal
     * DEPRECATED. The value is ignored. Embedded timeline is not supported.
     */
    embedded?: boolean;
    height?: number;
    overlayVideo?: boolean;
    disableDockPadding?: boolean;
    /**
     * @internal
     */
    positionTopInFullScreen?: boolean;
    /**
     * @internal
     */
    scrubberAlwaysOn?: boolean;
    /**
     * @internal
     */
    scrubberHeight?: number;
    /**
     * @internal
     */
    scrubberColor?: string;
}

export interface PlayerConfig {
    type: string;
    element?: string | Element;
    api?: PlayerAdaptorApi;
    /**
     * @internal
     */
    wide?: boolean;
    params?: any;
    mediaSrc?(): string; // for setting the player media source.
    mediaDetails?(details?: MediaDetails): MediaDetails | Promise<MediaDetails>;
}

export interface WidgetConfig {
    player: PlayerConfig;
    timeline?: TimelineConfig;
    /**
     * DEPRACATED. use ux.openOnLoad instead
     * @internal
     */
    openOnLoad?: boolean;
    /**
     * @internal
     */
    demoDiscussion?: string;
    /**
     * If provided the discusion widget will be embedded inside the host element instead of as overlay
     * The size of the widget is responsive and set to 100% width and height of the host element.
     */
    host?: HTMLElement;
    /**
     * @internal
     */
    stats?: StatsConfig;
}