/**
 * @module annoto
 */

interface ContentCountersBase {
    rootCount?: number;
    count?: number;
    emotions?: any;
}

export interface ContentCounters extends ContentCountersBase {
    emotions?: {
        [key:string]: number;
    };
}

export interface CommentsCounters extends ContentCounters {
    rootCountDiff?: number;
    countDiff?: number;
}

export interface VisibleEmotionData {
    vn: number;
    cn: number;
    rcn: number;
    tvn: number;
}

export interface VisibleCountersData extends ContentCountersBase {
    emotions?: {
        [key:string]: VisibleEmotionData;
    };
}

export interface ThreadMetadata {
    emotionsCount?: number;
    emotionsVotes?: {
        [key:string]: number;
    }
    rating?: number;
    ratingDiff?: number;
    live?: boolean;
    pbResolution?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface AnnotoMetadata {
    thread: ThreadMetadata;
    comments: CommentsCounters;
    notes?: ContentCounters;
    visible?: VisibleCountersData;
}