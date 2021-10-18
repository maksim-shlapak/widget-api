import { IVideoBenchmarkHeatmap } from './video-benchmark-event';

export interface IMyActivity {
    /**
     * Quantity of comments
     */
    comments: number;
    /**
     * Quantity of replies
     */
    replies: number;
    /**
     * acc_completion from {@link IVideoBenchmarkEvent}
     */
    completion: number;
    /**
     * acc_heatmap from {@link IVideoBenchmarkEvent}
     */
    heatmap: IVideoBenchmarkHeatmap;
    /**
     * acc_watch_time from {@link IVideoBenchmarkEvent}
     */
    watchTime: number;
}
