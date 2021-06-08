export type SortByType = 'most_recent' | 'top_rated' | 'by_timetag';

export interface ThreadConfig {
    /**
     * If set to true, when widget is loaded all the replies to comments will be shown.
     */
    showReplies?: boolean;
    /**
     * The default sorting to use on startup.
     * Default: 'most_recent'
     */
    sort?: SortByType;
}