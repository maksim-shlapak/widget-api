import { AnnotoConfig } from './config';
import { DeviceDetectorApi } from './device-detector';
import { AnnotoMetadata } from './metadata';
import { MediaDetails } from './media-details';
import { AnnotoUxEvent } from './ux-event';

export interface OriginProvider {
    getPageUrl: () => string;
    getMediaDeepLinkUrl?: (currentTime: number, mediaSrc: string) => string;
}

export interface AnnotoApi {
    load: (config: AnnotoConfig, cb?: () => void) => Promise<void>;
    close: (index?: number, cb?: () => void) => Promise<void>;
    auth: (token: string, cb?:() => void) => Promise<void>;
    logout: (cb?: () => void) => Promise<void>;
    show: (cb?: () => void) => Promise<void>;
    hide: (cb?: () => void) => Promise<void>;
    registerDeviceDetector: (detector: DeviceDetectorApi, cb?: () => void) => Promise<void>;
    registerOriginProvider: (provider: OriginProvider, cb?: (err?: Error) => void) => Promise<void>;
    getMetadata(): AnnotoMetadata;
}

type AnnotoEventType = 'ready' | 'metadata' | 'ux';
type AnnotoReadyCallback = (api: AnnotoApi) => void;
type AnnotoMetadataCallback = (metadata: AnnotoMetadata) => void;
type AnnotoUxEventCallback = (uxEvent: AnnotoUxEvent) => void;

export interface Annoto {
    on: (event: AnnotoEventType, cb: AnnotoReadyCallback | AnnotoMetadataCallback | AnnotoUxEventCallback) => void;
    boot: (config: AnnotoConfig) => void;
}

export { AnnotoConfig, DeviceDetectorApi, AnnotoMetadata, MediaDetails, AnnotoUxEvent };

export declare const Annoto: Annoto;