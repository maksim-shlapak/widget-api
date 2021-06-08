export enum StatsTypeEnum {
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

export interface IStatsEvent {
    /**
     * The type of the event
     */
    type: StatsTypeEnum;
    /**
     * The group Id provided on {@link MediaDetails}
     */
    group_id?: string;
    /**
     * Media source
     */
    media_src: string;
    /**
     * Video timestamp in seconds
     */
    ps?: number;
    /**
     * Unique visitor identifier
     */
    visitor_id: string;
    /**
     * Unique session identifier
     */
    session_id: string;
}
