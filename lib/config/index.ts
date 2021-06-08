/**
 * @module Config
 */

import { IWidgetBackendOptions } from './backend';
import { WidgetAlignConfig } from './align';
import { AnnotoFeatures } from './features';
import { ThreadConfig } from './thread';
import { UxConfig } from './ux';
import { WidgetConfig } from './widget';
import { LaunchSourceConfig } from './launch-source';

export * from './media-details';
export * from './features';
export * from './ux';
export * from './widget';
export * from './thread';
export * from './align';
export * from './backend';
export * from './launch-source';

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
     */
    align?: WidgetAlignConfig;
    /**
     * @internal
     * @deprecated use ux.maxWidth instead
     */
    width?: WidgetSizeConfig;
    /**
     * @internal
     * @deprecated
     */
    margins?: WidgetMargins;
    /**
     * Configuration options that affect the user experience
     */
    ux?: UxConfig;
    /**
     * Language code for the widget.
     * @default 'en'
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
     * @default 100
     */
    zIndex?: number;
    /**
     * same as zIndex, only for when the player is in fullscreen.
     * @default 100
     */
    fsZIndex?: number;

    backend?: IWidgetBackendOptions;
}

/**
 * @deprecated
 * @internal
 */
export interface WidgetSizeConfig {
    max?: number;
}

/**
 * Optional Margins from page edges for positioning the widget.
 * Has effect only when:
 * 1. player not in full screen
 * 2. widget is not overaly on top of the player
 * 3. ux is not sidePanel
 * @internal
 * @deprecated
 */
export interface WidgetMargins {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}