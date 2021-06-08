export interface AnnotoFeatures {
    comments?: boolean;
    privateNotes?: boolean;
    tabs?: boolean;
    commentsSubmit?: boolean;
    privateNotesSubmit?: boolean;
    userPreferences?: boolean;
    darkTheme?: boolean;
    /**
     * @internal
     */
    cta?: boolean;
    threadVote?: boolean;
    voteEmotions?: boolean;
    commentSentiment?: boolean;
    minibar?: boolean;
    timeline?: boolean;
    /**
     * @internal
     */
    stats?: boolean;   // if enabled StatsConfig must be provided
    /**
     * @internal
     */
    popout?: boolean;  // Does nothing at the moment. For future use
}