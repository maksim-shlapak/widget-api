# Interface: PlayerAdaptorApi

**`description`** Annoto Player Adaptor API

## Hierarchy

* **PlayerAdaptorApi**

## Index

### Methods

* [autoplay](playeradaptor.playeradaptorapi.md#optional-autoplay)
* [controlsDescriptor](playeradaptor.playeradaptorapi.md#optional-controlsdescriptor)
* [controlsElement](playeradaptor.playeradaptorapi.md#optional-controlselement)
* [controlsHeight](playeradaptor.playeradaptorapi.md#optional-controlsheight)
* [controlsHidden](playeradaptor.playeradaptorapi.md#optional-controlshidden)
* [currentTime](playeradaptor.playeradaptorapi.md#currenttime)
* [duration](playeradaptor.playeradaptorapi.md#duration)
* [embeddableElement](playeradaptor.playeradaptorapi.md#optional-embeddableelement)
* [fixFullScreen](playeradaptor.playeradaptorapi.md#optional-fixfullscreen)
* [fullScreen](playeradaptor.playeradaptorapi.md#optional-fullscreen)
* [height](playeradaptor.playeradaptorapi.md#optional-height)
* [init](playeradaptor.playeradaptorapi.md#init)
* [isLive](playeradaptor.playeradaptorapi.md#optional-islive)
* [mediaMetadata](playeradaptor.playeradaptorapi.md#optional-mediametadata)
* [mediaSrc](playeradaptor.playeradaptorapi.md#mediasrc)
* [onControlsEnter](playeradaptor.playeradaptorapi.md#optional-oncontrolsenter)
* [onControlsHide](playeradaptor.playeradaptorapi.md#optional-oncontrolshide)
* [onControlsLeave](playeradaptor.playeradaptorapi.md#optional-oncontrolsleave)
* [onControlsShow](playeradaptor.playeradaptorapi.md#optional-oncontrolsshow)
* [onFullScreen](playeradaptor.playeradaptorapi.md#optional-onfullscreen)
* [onMediaChange](playeradaptor.playeradaptorapi.md#onmediachange)
* [onPause](playeradaptor.playeradaptorapi.md#onpause)
* [onPlay](playeradaptor.playeradaptorapi.md#onplay)
* [onReady](playeradaptor.playeradaptorapi.md#onready)
* [onRemove](playeradaptor.playeradaptorapi.md#optional-onremove)
* [onSeek](playeradaptor.playeradaptorapi.md#onseek)
* [onSizeChange](playeradaptor.playeradaptorapi.md#optional-onsizechange)
* [onTimeUpdate](playeradaptor.playeradaptorapi.md#ontimeupdate)
* [pause](playeradaptor.playeradaptorapi.md#pause)
* [paused](playeradaptor.playeradaptorapi.md#paused)
* [play](playeradaptor.playeradaptorapi.md#play)
* [remove](playeradaptor.playeradaptorapi.md#optional-remove)
* [setCurrentTime](playeradaptor.playeradaptorapi.md#setcurrenttime)
* [trackMarginLeft](playeradaptor.playeradaptorapi.md#optional-trackmarginleft)
* [trackMarginRight](playeradaptor.playeradaptorapi.md#optional-trackmarginright)
* [updateControlsDescriptor](playeradaptor.playeradaptorapi.md#optional-updatecontrolsdescriptor)
* [videoRatio](playeradaptor.playeradaptorapi.md#optional-videoratio)
* [width](playeradaptor.playeradaptorapi.md#optional-width)

## Methods

### `Optional` autoplay

▸ **autoplay**(): *boolean | Promise‹boolean›*

**`description`** (OPTIONAL) Get player autoplay configuration option
(if player configured to play on page load)

**Returns:** *boolean | Promise‹boolean›*

___

### `Optional` controlsDescriptor

▸ **controlsDescriptor**(): *[ControlsDescriptor](playeradaptor.controlsdescriptor.md)*

**`description`** (OPTIONAL) Get player controls description parameters.
The parameters describe behavior of the player controls.

**Returns:** *[ControlsDescriptor](playeradaptor.controlsdescriptor.md)*

controls descriptor object

___

### `Optional` controlsElement

▸ **controlsElement**(): *Element*

**`description`** (OPTIONAL) Get player controls Element for embedding
annoto timeline for overlay and full screen mode.
NOTE: Although this method is optional it's highly recomended and will make the integration
much simpler, imrove performance and provide better User experience.
NOTE: if not supported the function must be undefined.

**Returns:** *Element*

___

### `Optional` controlsHeight

▸ **controlsHeight**(): *number | string*

**`description`** (OPTIONAL) Get player controls height in pixels.
If supported it will be used instead of controlsDescriptor values.
NOTE: if not supported the function must be undefined.
Annoto will use other methods to detect height of the player.

**Returns:** *number | string*

if string, may contain 'px'

___

### `Optional` controlsHidden

▸ **controlsHidden**(): *boolean*

**`description`** (OPTIONAL) Get player controls hidden state.
NOTE: if not supported the function must be undefined.
Annoto will use other methods to detect controls state.

**Returns:** *boolean*

___

###  currentTime

▸ **currentTime**(): *number | Promise‹number›*

**`description`** Get time of current playback position.

**Returns:** *number | Promise‹number›*

- in seconds. Preferred Floating point precision.

___

###  duration

▸ **duration**(): *number | Promise‹number›*

**`description`** Get the total media track duration in seconds
0 or NaN or 'undefined' values may be returned until media is ready.
Note: For live video for best experience return the latest known duration of the stream.
(for DVR enabled live stream, it can defer from currentTime)

**Returns:** *number | Promise‹number›*

- in seconds

___

### `Optional` embeddableElement

▸ **embeddableElement**(): *Element*

**`description`** (OPTIONAL) Get player Element for embedding annoto application for full screen state.
If not provided the main player Element would be used (the element provided at init()).
NOTE: if not supported the function must be undefined.

**Returns:** *Element*

___

### `Optional` fixFullScreen

▸ **fixFullScreen**(): *boolean*

**`description`** (OPTIONAL) By default Annoto will try applying a fix
To enable Annoto to work when player enters Full screen. The fix is
moving annoto-app container as a child of the player element or embeddableElement()
annoto-app will be moved only if the player element allows it (is NOT an IFRAME).
annoto-app will be moved when player enters full screen, and moved back to the original
parent of annoto-app obtained at Annoto.boot() call.
NOTE: In rare case when this must be disabled, return false from the function.

**Returns:** *boolean*

___

### `Optional` fullScreen

▸ **fullScreen**(): *boolean*

**`description`** (OPTIONAL) Get player full screen state.
NOTE: if not supported the function must be undefined.
Annoto will use other methods to detect full screen.

**Returns:** *boolean*

___

### `Optional` height

▸ **height**(): *number | string*

**`description`** (OPTIONAL) Get player height in pixels.
NOTE: if not supported the function must be undefined.
Annoto will use other methods to detect height of the player.

**Returns:** *number | string*

if string, may contain 'px'

___

###  init

▸ **init**(`element`: Element, `params?`: any): *boolean | Promise‹boolean›*

**`description`** This method is called by Annoto as the first method.
Use it to configure the player interface object.
If the method returns false, Annoto will retry a number of times with fixed
period of time between the retries.
This is useful if your player needs to load some resources, or wait for some condition.
Notice: For Advanced use cases, the method can return a Promise. If a Promise is returned,
        No retries shall be performed. Annoto will wait for Promise resolve/reject.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | Element | html DOM element of the player (as configured by Annoto API) |
`params?` | any | player.params of API configuration |

**Returns:** *boolean | Promise‹boolean›*

___

### `Optional` isLive

▸ **isLive**(): *boolean | Promise‹boolean›*

**`description`** (OPTIONAL) Return if the media is a live stream or a VOD.
NOTE: if the method is not implemented VOD is assumed.

**Returns:** *boolean | Promise‹boolean›*

___

### `Optional` mediaMetadata

▸ **mediaMetadata**(): *[MediaDetails](annotoconfig.mediadetails.md) | Promise‹[MediaDetails](annotoconfig.mediadetails.md)›*

**`description`** (OPTIONAL) Get Details for the media.
Notice: this value can be overriden by player.mediaDetails widget configuration.

**Returns:** *[MediaDetails](annotoconfig.mediadetails.md) | Promise‹[MediaDetails](annotoconfig.mediadetails.md)›*

___

###  mediaSrc

▸ **mediaSrc**(): *string | Promise‹string›*

**`description`** Get currently played media source. The returned value, identifies
the current video and must be unique. It can be a full URL or an unique identifier.
Notice: this value can be overriden by player.mediaSrc widget configuration.

**Returns:** *string | Promise‹string›*

___

### `Optional` onControlsEnter

▸ **onControlsEnter**(`cb`: [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)): *void*

**`description`** (DEPRECATED) cb should be called when mouse enters player controls.
If implemented the onControlsLeave() method must be implemented as well.
NOTE: In most cases this event is not required.
NOTE: if not supported the function must be undefined.
If defined the main usage of this event is to hide Annoto Timeline when user hovers
mouse over the players controls, for example for players where Annoto Timeline interfers with
some hover functionality of the player. The function is required only for Iframe players for
other players Annoto can detect the event by itself.

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** *void*

___

### `Optional` onControlsHide

▸ **onControlsHide**(`cb`: [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)): *void*

**`description`** (OPTIONAL) cb should be called when player controls are hidden.
If implemented the onControlsShow() method must be implemented as well.
If implemented those events will be used instead of mouse tracking
and controlsDescriptor.mouse parameters.
NOTE: if not supported the function must be undefined.
Annoto will use other methods to detect controls state.

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** *void*

___

### `Optional` onControlsLeave

▸ **onControlsLeave**(`cb`: [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)): *void*

**`description`** (DEPRECATED) cb should be called when mouse leaves player controls.
If implemented the onControlsEnter() method must be implemented as well.
NOTE: In most cases this event is not required.
NOTE: if not supported the function must be undefined.
If defined the main usage of this event is to hide Annoto Timeline when user hovers
mouse over the players controls, for example for players where Annoto Timeline interfers with
some hover functionality of the player. The function is required only for Iframe players for
other players Annoto can detect the event by itself.

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** *void*

___

### `Optional` onControlsShow

▸ **onControlsShow**(`cb`: [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)): *void*

**`description`** (OPTIONAL) cb should be called when player controls are shown.
If implemented the onControlsHide() method must be implemented as well.
If implemented those events will be used instead of mouse tracking
and controlsDescriptor.mouse parameters.
NOTE: if not supported the function must be undefined.
Annoto will use other methods to detect controls state.

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** *void*

___

### `Optional` onFullScreen

▸ **onFullScreen**(`cb`: function): *void*

**`description`** (OPTIONAL) cb should be called when full screen state of the player changes.
NOTE: if not supported the function must be undefined.
Annoto will use other methods to detect full screen changes.

**Parameters:**

▪ **cb**: *function*

▸ (`isFullScreen?`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`isFullScreen?` | boolean |

**Returns:** *void*

___

###  onMediaChange

▸ **onMediaChange**(`cb`: [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)): *void*

**`description`** cb should be called when the media source changes.

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** *void*

___

###  onPause

▸ **onPause**(`cb`: [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)): *void*

**`description`** cb should be called when the media is paused.

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** *void*

___

###  onPlay

▸ **onPlay**(`cb`: [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)): *void*

**`description`** cb should be called when the media is played.

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** *void*

___

###  onReady

▸ **onReady**(`cb`: [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)): *void*

**`description`** cb should be called when the player is setup and the media metadata is loaded.
Note: This method MUST be called as the first event.
If your player does not support this event, simulate it by calling the cb manually.

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** *void*

___

### `Optional` onRemove

▸ **onRemove**(`cb`: [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)): *void*

**`description`** (OPTIONAL) cb should be called when
the media element/player is taken off of a page.
Useful for dynamic websites.

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** *void*

___

###  onSeek

▸ **onSeek**(`cb`: [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)): *void*

**`description`** cb should be called when the media is seeked
(playback position changes after seeking).

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** *void*

___

### `Optional` onSizeChange

▸ **onSizeChange**(`cb`: [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)): *void*

**`description`** (OPTIONAL) cb should be called when player size changes.
NOTE: if not supported the function must be undefined.
Annoto will use other methods to detect size change.

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** *void*

___

###  onTimeUpdate

▸ **onTimeUpdate**(`cb`: [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)): *void*

**`description`** cb should be called when the media playback current time is updated.
Or when the media duration is changed.
can be frequent. 200 msec is a good choice for period.

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** *void*

___

###  pause

▸ **pause**(): *void | Promise‹void›*

**`description`** Pause the media

**Returns:** *void | Promise‹void›*

___

###  paused

▸ **paused**(): *boolean | Promise‹boolean›*

**`description`** Get player playback state (playing or paused)

**Returns:** *boolean | Promise‹boolean›*

- true if pause, false if playing

___

###  play

▸ **play**(): *void | Promise‹void›*

**`description`** Start playing the media

**Returns:** *void | Promise‹void›*

___

### `Optional` remove

▸ **remove**(): *void | Promise‹void›*

**`description`** (OPTIONAL) called by Annoto to release resources when the widget is closing.
NOTICE: Although optional this method is highly recommended if you use Annoto API
to dynamically load and close the widget.
The adaptor implementation should discard the events that were regsitered using the onReady, onPlay, etc. when remove() is called.

**Returns:** *void | Promise‹void›*

___

###  setCurrentTime

▸ **setCurrentTime**(`time`: number): *void | Promise‹void›*

**`description`** Set the media current time of track (skip/seek to time of the track)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`time` | number | in seconds  |

**Returns:** *void | Promise‹void›*

___

### `Optional` trackMarginLeft

▸ **trackMarginLeft**(): *number | string*

**`description`** (OPTIONAL) Get player controls track (progress bar) left margin in pixels.
If supported it will be used instead of controlsDescriptor values.
NOTE: if not supported the function must be undefined.
Annoto will use other methods to detect height of the player.

**Returns:** *number | string*

if string, may contain 'px'

___

### `Optional` trackMarginRight

▸ **trackMarginRight**(): *number | string*

**`description`** (OPTIONAL) Get player player controls track (progress bar) right margin in pixels.
If supported it will be used instead of controlsDescriptor values.
NOTE: if not supported the function must be undefined.
Annoto will use other methods to detect height of the player.

**Returns:** *number | string*

if string, may contain 'px'

___

### `Optional` updateControlsDescriptor

▸ **updateControlsDescriptor**(`isPhone`: boolean, `isFullScreen`: boolean): *void*

**`description`** (OPTIONAL) If defined will be called at view refreshes of the widget.
Allows the player to perform optional adjustments to the controls descriptor.
NOTE: may be called frequently, so no heavy operations should be performed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isPhone` | boolean | - |
`isFullScreen` | boolean |   |

**Returns:** *void*

___

### `Optional` videoRatio

▸ **videoRatio**(): *number | null*

**`description`** (OPTIONAL) Get the ration of width / height of the video frame itself.
Note: the ratio shold be of the video frame, not of the player element (it can be differnt).
Note: In most cases this method is not required. It is required only if the controls size
depends on the video frame size and not on the player element size, for example this is the
case in Vimeo player.

**Returns:** *number | null*

___

### `Optional` width

▸ **width**(): *number | string*

**`description`** (OPTIONAL) Get player width in pixels.
NOTE: if not supported the function must be undefined.
Annoto will use other methods to detect width of the player.

**Returns:** *number | string*

if string, may contain 'px'
