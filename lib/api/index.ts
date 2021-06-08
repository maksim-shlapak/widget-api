/**
 * @module Api
 */

import { AnnotoConfig } from '../config';
import { DeviceDetectorApi } from './device-detector';
import { AnnotoMetadata } from './metadata';
import { OriginProvider } from './origin-provider';
export * from './metadata';
export * from './origin-provider';
export * from './device-detector';

export interface AnnotoApi {
    load(config: AnnotoConfig, cb?: () => void): Promise<void>;
    close(index?: number, cb?: () => void): Promise<void>;
    auth(token: string, cb?: () => void): Promise<void>;
    logout(cb?: () => void): Promise<void>;
    show(cb?: () => void): Promise<void>;
    hide(cb?: () => void): Promise<void>;
    registerDeviceDetector(detector: DeviceDetectorApi, cb?: () => void): Promise<void>;
    registerOriginProvider(provider: OriginProvider, cb?: (err?: Error) => void): Promise<void>;
    getMetadata(): AnnotoMetadata;
}