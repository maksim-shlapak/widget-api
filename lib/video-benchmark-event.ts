/**
 * @packageDocumentation
 * @module annoto
 */

export interface IAnnotoVideoBenchmarkEvent {
    group_id: string;
    visitor_id: string;
    session_id: string;
    duration: number;
    segment_start: number;
    segment_end: number;
    media_src: string;
}
