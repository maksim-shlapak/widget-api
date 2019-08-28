/**
 * @description The parameters describe behavior of the player controls
 * It is used as default controls parameters for correct timeline behavior in overlay
 * and in full screen mode.
 */
export interface ControlsDescriptor {
    /**
     * The height in pixels of the controls
     */
    height: number;

    /**
     * if true the custom scrubber bar will be enabled in overlay.
     * By default player controls scrubber is assumed to present in overlay and the custom scrubber is not shown.
     */
    scrubberOnInOverlay?: boolean;

    /**
     * The track is the progress timeline element of the controls
     * not including the other controls like the play button.
     */
    track: ControlsDescriptorTrack;

    /**
     * Same parameters as above for full screen. Some players have different parameters of controls
     * when they are in full screen.
     */
    fullScreen: ControlsDescriptorFullscreen;

    /**
     * Mouse tracking
     */
    mouse: ControlsDescriptorMouse;

    /**
     * The controls may have a transition effect for hidding and showing.
     */
    transitions: ControlsDescriptorTransitions;

    /**
     * Timeline behaviour
     */
    timeline: ControlsDescriptorTimeline;

    /**
     * The controls are dynamically closing and opening based on user mouse movement.
     * To fit the the timeline to the state of the controls, we track mouse movement.
     */
    hideOnPlay?: boolean;

    /**
     * Set to true if play() action causes controls to hide
     */
    shownOnLoad?: boolean;

    /**
     * Set to true if controls are shown when the player loads
     */
    showDelay?: number;

    /**
     * Delay in milliseconds for any show controls action
     */
    hideDelay?: number;

    /**
     * Delay in milliseconds for hide action (for example after mouse leaves the video frame)
     */
    firstShowDelay?: number;

    /**
     * Similar to showDelay, but only for first show of controls. Not required for most players.
     */
    fixVideoRatioOffsets?: boolean;

    /**
     * Video frame ratio offsets
     */
    videoRatioOffsets?: ControlsDescriptorVideoRatioOffsets;
}

export interface ControlsDescriptorTrack {
    /**
     * The space in pixels between the right edge of the player and the end of the track
     */
    marginRight: number;
    
    /**
     * The space in pixels between the left edge of the player and the start of the track
     */
    marginLeft: number;
    
    /**
     * Maximum width of the track in pixels.
     * Not required for some of the players because the track width is 100%.
     * If set must be set to an integer representing pixels.
     */
    maxWidth?: number;
    
    /**
     * Width of the track in percentage of the whole screen width.
     * Some players don't use fixed width but use
     * percentage instead.
     */
    widthPercentage?: number;
}

export interface ControlsDescriptorFullscreen {
    height: number;
    /**
     *  Set the margins for the timeline.
     *  if Annoto configured to place the timeline at the top of
     *  the screen when the player is in full screen.
     */
    topTrack?: {
        margins?: number;
    };
    
    track: ControlsDescriptorTrack;
}

export interface ControlsDescriptorMouse {
    /**
     * Set to true if movement of the mouse inside player opens the controls
     */
    trackMove?: boolean;
    
    /**
     * Timeout in milliseconds after which the controls are hiding
     * when mouse inside the player is not moved.
     */
    moveTimeout?: number;
    
    /**
     * Set to true if the controls are hiding when mouse leaves the video frame
     * (see hideDelay below).
     */
    hideOnLeave?: boolean;
    
    /**
     * Set to true if when mouse enters the video frame the controls gets open.
     */
    showOnEnter?: boolean;
    
    /**
     * similar to moveTimeout but for mouse enter into video frame.
     * Useful when trackMove is false
     */
    enterTimeout?: number; 
}

export interface ControlsDescriptorTransitions {
    /**
     * Set the css timming for controls show.
     * Default: '0s linear'
     */
    showTiming?: string;

    /**
     * Set the css timming for controls hide.
     * Default: '0s linear'
     */
    hideTiming?: string; 
}

export interface ControlsDescriptorTimeline {
    /**
     * If set to true, and hideOnHide is true as well, the timeline will fade out/in.
     * By default it will transition up and down instead.
     */
    fadeInOut?: boolean;
}

export interface ControlsDescriptorVideoRatioOffsets {
    center?: boolean;
    top: number;
    left: number;
}