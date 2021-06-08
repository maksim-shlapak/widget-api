/**
 * Each video divided into segments based on viewer watch pattern
 * x timestamp in seconds of the segment end, y is view intencity.
 * single full segment view is y = 1.
 */
export interface IVideoBenchmarkHeatmap {
    series: { x: number; y: number }[];
}


export interface IVideoBenchmarkEvent {
    /**
     * The group Id provided on {@link MediaDetails}
     */
    group_id?: string;
    /**
     * Media source
     */
    media_src: string;
    /**
     * Video duration
     */
    duration: number;
    /**
     * Start of watched video segment in seconds
     */
    segment_start: number;
    /**
     * End of watched video segment in seconds
     */
    segment_end: number;
    /**
     * 0 - 100 percentage per session
     */
    completion: number;
    /**
     * watch time in seconds per session
     */
    watch_time: number;
    /**
     * View heatmap for the session
     */
    heatmap?: IVideoBenchmarkHeatmap;
    /**
     * all time accumulated 0 - 100 percentage
     */
    acc_completion: number;
    /**
     * all time accumulated watch time in seconds
     */
    acc_watch_time: number;
    /**
     * all time accumalted heatmap
     */
    acc_heatmap?: IVideoBenchmarkHeatmap;
    /**
     * Unique visitor identifier
     */
    visitor_id: string;
    /**
     * Unique session identifier
     */
    session_id: string;
}
