import { AnnotoConfig } from './config';
import { DeviceDetectorApi } from './device-detector';
import { AnnotoMetadata } from './metadata';
import { MediaDetails } from './media-details';

export interface OriginProvider {
    getPageUrl: () => string;
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

type AnnotoEventType = 'ready' | 'metadata';
type AnnotoReadyCallback = (api: AnnotoApi) => void;
type AnnotoMetadataCallback = (metadata: AnnotoMetadata) => void;

export interface Annoto {
    on: (event: AnnotoEventType, cb: AnnotoReadyCallback | AnnotoMetadataCallback) => void;
    boot: (config: AnnotoConfig) => void;
}

export { AnnotoConfig, DeviceDetectorApi, AnnotoMetadata, MediaDetails };

export declare const Annoto: Annoto;