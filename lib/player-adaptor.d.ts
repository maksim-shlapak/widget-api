/**
 * @module playerAdaptor
 */

import { MediaDetails } from './media-details';
import { ControlsDescriptor } from './controls-descriptor';

export type PlayerEventCallback = () => void;
export * from './controls-descriptor';

/**
 * @description Annoto Player Adaptor API
 */
export interface PlayerAdaptorApi {
    /**
     * @description This method is called by Annoto as the first method.
     * Use it to configure the player interface object.
     * If the method returns false, Annoto will retry a number of times with fixed
     * period of time between the retries.
     * This is useful if your player needs to load some resources, or wait for some condition.
     * Notice: For Advanced use cases, the method can return a Promise. If a Promise is returned,
     *         No retries shall be performed. Annoto will wait for Promise resolve/reject.
     *
     * @param element - html DOM element of the player (as configured by Annoto API)
     * @param params - player.params of API configuration
     * @returns {boolean/Promise}
     */
    init(element: Element, params?: any): boolean | Promise<boolean>;

    /**
     * @description (OPTIONAL) called by Annoto to release resources when the widget is closing.
     * NOTICE: Although optional this method is highly recommended if you use Annoto API
     * to dynamically load and close the widget.
     * The adaptor implementation should discard the events that were regsitered using the onReady, onPlay, etc. when remove() is called.
     */
    remove?(): void | Promise<void>;

    /**
     * @description Start playing the media
     */
    play(): void | Promise<void>;

    /**
     * @description Pause the media
     */
    pause(): void | Promise<void>;

    /**
     * @description Set the media current time of track (skip/seek to time of the track)
     * @param time - in seconds
     */
    setCurrentTime(time: number): void | Promise<void>;

    /**
     * @description (OPTIONAL) Return if the media is a live stream or a VOD.
     * NOTE: if the method is not implemented VOD is assumed.
     * @returns {boolean | Promise<boolean>}
     */
    isLive?(): boolean | Promise<boolean>;

    /**
     * @description Get time of current playback position.
     * @returns {Number | Promise<number>} - in seconds. Preferred Floating point precision.
     */
    currentTime(): number | Promise<number>;

    /**
     * @description Get the total media track duration in seconds
     * 0 or NaN or 'undefined' values may be returned until media is ready.
     * Note: For live video for best experience return the latest known duration of the stream.
     * (for DVR enabled live stream, it can defer from currentTime)
     * @returns {Number | NaN | Promise<number>} - in seconds
     */
    duration(): number | Promise<number>;

    /**
     * @description Get player playback state (playing or paused)
     * @returns {boolean | Promise<boolean>} - true if pause, false if playing
     */
    paused(): boolean | Promise<boolean>;

    /**
     * @description Get currently played media source. The returned value, identifies
     * the current video and must be unique. It can be a full URL or an unique identifier.
     * Notice: this value can be overriden by player.mediaSrc widget configuration.
     * @returns {string | Promise<string>}
     */
    mediaSrc(): string | Promise<string>;

    /**
     * @description (OPTIONAL) Get Details for the media.
     * Notice: this value can be overriden by player.mediaDetails widget configuration.
     * @return {MediaDetails | Promise<MediaDetails>}
     */
    mediaMetadata?(): MediaDetails | Promise<MediaDetails>;

    /**
     * @description (OPTIONAL) Get player autoplay configuration option
     * (if player configured to play on page load)
     * @returns {boolean | Promise<boolean>}
     */
    autoplay?(): boolean | Promise<boolean>;

    /**
     * @description (OPTIONAL) Get player full screen state.
     * NOTE: if not supported the function must be undefined.
     * Annoto will use other methods to detect full screen.
     * @returns {boolean}
     */
    fullScreen?(): boolean;

    /**
     * @description (OPTIONAL) By default Annoto will try applying a fix
     * To enable Annoto to work when player enters Full screen. The fix is
     * moving annoto-app container as a child of the player element or embeddableElement()
     * annoto-app will be moved only if the player element allows it (is NOT an IFRAME).
     * annoto-app will be moved when player enters full screen, and moved back to the original
     * parent of annoto-app obtained at Annoto.boot() call.
     * NOTE: In rare case when this must be disabled, return false from the function.
     * @returns {boolean}
     */
    fixFullScreen?(): boolean;

    /**
     * @description (OPTIONAL) Get player controls Element for embedding
     * annoto timeline for overlay and full screen mode.
     * NOTE: Although this method is optional it's highly recomended and will make the integration
     * much simpler, imrove performance and provide better User experience.
     * NOTE: if not supported the function must be undefined.
     * @returns {Element}
     */
    controlsElement?(): Element;

    /**
     * @description (OPTIONAL) Get player Element for embedding annoto application for full screen state.
     * If not provided the main player Element would be used (the element provided at init()).
     * NOTE: if not supported the function must be undefined.
     * @returns {Element}
     */
    embeddableElement?(): Element;
    /**
     * @description (OPTIONAL) Get player width in pixels.
     * NOTE: if not supported the function must be undefined.
     * Annoto will use other methods to detect width of the player.
     * @returns {number | string} if string, may contain 'px'
     */
    width?(): number | string;

    /**
     * @description (OPTIONAL) Get player height in pixels.
     * NOTE: if not supported the function must be undefined.
     * Annoto will use other methods to detect height of the player.
     * @returns {number | string} if string, may contain 'px'
     */
    height?(): number | string;

// Events - callbacks to be called when certain events take place.
// No need to support multiple registrations for same event.
// Annoto registeres on the events on Annoto.boot() and on each time annotoApi.load() is called.
// Notice the description of the adaptor remove() method above.
// Annoto will register to those Events after the init() call returns/resolves to true.

    /**
     * @description cb should be called when the player is setup and the media metadata is loaded.
     * Note: This method MUST be called as the first event.
     * If your player does not support this event, simulate it by calling the cb manually.
     * @param cb{PlayerEventCallback}
     */
    onReady(cb: PlayerEventCallback): void;

    /**
     * @description cb should be called when the media is played.
     * @param cb{PlayerEventCallback}
     */
    onPlay(cb: PlayerEventCallback): void;

    /**
     * @description cb should be called when the media is paused.
     * @param cb{PlayerEventCallback}
     */
    onPause(cb: PlayerEventCallback): void;

    /**
     * @description cb should be called when the media is seeked
     * (playback position changes after seeking).
     * @param cb{PlayerEventCallback}
     */
    onSeek(cb: PlayerEventCallback): void;

    /**
     * @description cb should be called when the media playback current time is updated.
     * Or when the media duration is changed.
     * can be frequent. 200 msec is a good choice for period.
     * @param cb{PlayerEventCallback}
     */
    onTimeUpdate(cb: PlayerEventCallback): void;

    /**
     * @description cb should be called when the media source changes.
     * @param cb{PlayerEventCallback}
     */
    onMediaChange(cb: PlayerEventCallback): void;

    /**
     * @description (OPTIONAL) cb should be called when full screen state of the player changes.
     * NOTE: if not supported the function must be undefined.
     * Annoto will use other methods to detect full screen changes.
     * @param cb{(isFullScreen?: boolean) => void} the callback may pass non mandatory new full screen state as boolean.
     */
    onFullScreen?(cb: (isFullScreen?: boolean) => void): void;

    /**
     * @description (OPTIONAL) cb should be called when player size changes.
     * NOTE: if not supported the function must be undefined.
     * Annoto will use other methods to detect size change.
     * @param cb{PlayerEventCallback}
     */
    onSizeChange?(cb: PlayerEventCallback): void;

    /**
     * @description (OPTIONAL) cb should be called when
     * the media element/player is taken off of a page.
     * Useful for dynamic websites.
     * @param cb{PlayerEventCallback}
     */
    onRemove?(cb: PlayerEventCallback): void;


// Advanced Optional APIs. Below APIs are required only if the player does not support controlsElement() method, or if the player element is an IFRAME.
// The APIs deal with providing information on the player controls, so that Annoto timeline can be of the right size and be shown and hidden according
// to the player controls behaviour.
// For non IFRAME players it is always best practice to implement the controlsElement() method.

    /**
     * @description (OPTIONAL) Get player controls description parameters.
     * The parameters describe behavior of the player controls.
     * @returns {ControlsDescriptor} controls descriptor object
     */
    controlsDescriptor?(): ControlsDescriptor;

    /**
     * @description (OPTIONAL) If defined will be called at view refreshes of the widget.
     * Allows the player to perform optional adjustments to the controls descriptor.
     * NOTE: may be called frequently, so no heavy operations should be performed.
     * @param isPhone {boolean}
     * @param isFullScreen {boolean}
     */
    updateControlsDescriptor?(isPhone: boolean, isFullScreen: boolean): void;

    /**
     * @description (OPTIONAL) Get player controls hidden state.
     * NOTE: if not supported the function must be undefined.
     * Annoto will use other methods to detect controls state.
     * @returns {boolean}
     */
    controlsHidden?(): boolean;

    /**
     * @description (OPTIONAL) Get player controls height in pixels.
     * If supported it will be used instead of controlsDescriptor values.
     * NOTE: if not supported the function must be undefined.
     * Annoto will use other methods to detect height of the player.
     * @returns {number | string} if string, may contain 'px'
     */
    controlsHeight?(): number | string;

    /**
     * @description (OPTIONAL) Get player controls track (progress bar) left margin in pixels.
     * If supported it will be used instead of controlsDescriptor values.
     * NOTE: if not supported the function must be undefined.
     * Annoto will use other methods to detect height of the player.
     * @returns {number | string} if string, may contain 'px'
     */
    trackMarginLeft?(): number | string;

    /**
     * @description (OPTIONAL) Get player player controls track (progress bar) right margin in pixels.
     * If supported it will be used instead of controlsDescriptor values.
     * NOTE: if not supported the function must be undefined.
     * Annoto will use other methods to detect height of the player.
     * @returns {number | string} if string, may contain 'px'
     */
    trackMarginRight?(): number | string;

    /**
     * @description (OPTIONAL) cb should be called when player controls are shown.
     * If implemented the onControlsHide() method must be implemented as well.
     * If implemented those events will be used instead of mouse tracking
     * and controlsDescriptor.mouse parameters.
     * NOTE: if not supported the function must be undefined.
     * Annoto will use other methods to detect controls state.
     * @param cb{function}
     */
    onControlsShow?(cb: PlayerEventCallback): void;

    /**
     * @description (OPTIONAL) cb should be called when player controls are hidden.
     * If implemented the onControlsShow() method must be implemented as well.
     * If implemented those events will be used instead of mouse tracking
     * and controlsDescriptor.mouse parameters.
     * NOTE: if not supported the function must be undefined.
     * Annoto will use other methods to detect controls state.
     * @param cb{PlayerEventCallback}
     */
    onControlsHide?(cb: PlayerEventCallback): void;

    /**
     * @description (OPTIONAL) Get the ration of width / height of the video frame itself.
     * Note: the ratio shold be of the video frame, not of the player element (it can be differnt).
     * Note: In most cases this method is not required. It is required only if the controls size
     * depends on the video frame size and not on the player element size, for example this is the
     * case in Vimeo player.
     */
    videoRatio?(): number | null;

// DEPRECATED

    /**
     * @description (DEPRECATED) cb should be called when mouse enters player controls.
     * If implemented the onControlsLeave() method must be implemented as well.
     * NOTE: In most cases this event is not required.
     * NOTE: if not supported the function must be undefined.
     * If defined the main usage of this event is to hide Annoto Timeline when user hovers
     * mouse over the players controls, for example for players where Annoto Timeline interfers with
     * some hover functionality of the player. The function is required only for Iframe players for
     * other players Annoto can detect the event by itself.
     * @param cb{PlayerEventCallback}
     */
    onControlsEnter?(cb: PlayerEventCallback): void;

    /**
     * @description (DEPRECATED) cb should be called when mouse leaves player controls.
     * If implemented the onControlsEnter() method must be implemented as well.
     * NOTE: In most cases this event is not required.
     * NOTE: if not supported the function must be undefined.
     * If defined the main usage of this event is to hide Annoto Timeline when user hovers
     * mouse over the players controls, for example for players where Annoto Timeline interfers with
     * some hover functionality of the player. The function is required only for Iframe players for
     * other players Annoto can detect the event by itself.
     * @param cb{PlayerEventCallback}
     */
    onControlsLeave?(cb: PlayerEventCallback): void;
}
