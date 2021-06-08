export enum StatsType {
    firstPlay = 1,
    commentTimetagTap,
    showReplyTap,
    noteTimetagTap,
    vote,
    threadSort,
    threadFollow,
    commentKukuTap,
    commentTap,
    noteKukuTap,
    noteTap,
    timelineUgcTap,
    syncTap,
    comment,
    reply,
    note,
    commentEdit,
    commentDelete,
    noteEdit,
    noteDelete,
    groupFollow,
}

export interface IAnnotoStatsEvent {
    type: StatsType;
    ugc_id?: number;
    group_id: string;
    visitor_id: string;
    session_id: string;
    ps?: number;
    id?: string;
    timestamp?: string;
    media_src: string;
}
