/**
 * @packageDocumentation
 * @module annoto
 */

import { AnnotoConfig } from './config';
import { DeviceDetectorApi } from './device-detector';
import { AnnotoMetadata } from './metadata';
import { MediaDetails } from './media-details';
import { AnnotoUxEvent } from './ux-event';

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

export interface AnnotoApi {
    load(config: AnnotoConfig, cb?: () => void): Promise<void>;
    close(index?: number, cb?: () => void): Promise<void>;
    auth(token: string, cb?:() => void): Promise<void>;
    logout(cb?: () => void): Promise<void>;
    show(cb?: () => void): Promise<void>;
    hide(cb?: () => void): Promise<void>;
    registerDeviceDetector(detector: DeviceDetectorApi, cb?: () => void): Promise<void>;
    registerOriginProvider(provider: OriginProvider, cb?: (err?: Error) => void): Promise<void>;
    getMetadata(): AnnotoMetadata;
}

export type AnnotoEventType = 'ready' | 'metadata' | 'ux';
export type AnnotoReadyCallback = (api: AnnotoApi) => void;
export type AnnotoMetadataCallback = (metadata: AnnotoMetadata) => void;
export type AnnotoUxEventCallback = (uxEvent: AnnotoUxEvent) => void;

export interface Annoto {
    on(event: AnnotoEventType, cb: AnnotoReadyCallback | AnnotoMetadataCallback | AnnotoUxEventCallback): void;
    boot(config: AnnotoConfig): void;
}

export { AnnotoConfig, DeviceDetectorApi, AnnotoMetadata, MediaDetails, AnnotoUxEvent };
