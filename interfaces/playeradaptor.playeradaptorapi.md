

*__description__*: Annoto Player Adaptor API

# Hierarchy

**PlayerAdaptorApi**

# Properties

<a id="autoplay"></a>

##  autoplay

**● autoplay**: *`function`*

*__description__*: Get player autoplay configuration option (if player configured to play on page load) If such an option is not supported, return false.

*__returns__*: 

#### Type declaration
▸():  `boolean` &#124; `Promise`<`boolean`>

**Returns:**  `boolean` &#124; `Promise`<`boolean`>

___
<a id="controlsdescriptor"></a>

##  controlsDescriptor

**● controlsDescriptor**: *`function`*

*__description__*: Get player controls description parameters. The parameters describe behavior of the player controls.

*__returns__*: controls descriptor object

#### Type declaration
▸(): [ControlsDescriptor](playeradaptor.controlsdescriptor.md)

**Returns:** [ControlsDescriptor](playeradaptor.controlsdescriptor.md)

___
<a id="controlselement"></a>

## `<Optional>` controlsElement

**● controlsElement**: *`function`*

*__description__*: (OPTIONAL) Get player controls Element of type DIV for embedding annoto timeline for overlay and full screen mode. NOTE: if not supported the function must be undefined.

*__returns__*: 

#### Type declaration
▸(): `Element`

**Returns:** `Element`

___
<a id="controlsheight"></a>

## `<Optional>` controlsHeight

**● controlsHeight**: *`function`*

*__description__*: (OPTIONAL) Get player controls height in pixels. If supported it will be used instead of controlsDescriptor values. NOTE: if not supported the function must be undefined. Annoto will use other methods to detect height of the player. Below it is defined only for purposes of API documentation.

*__returns__*: if string, may contain 'px'

#### Type declaration
▸():  `number` &#124; `string`

**Returns:**  `number` &#124; `string`

___
<a id="controlshidden"></a>

## `<Optional>` controlsHidden

**● controlsHidden**: *`function`*

*__description__*: (OPTIONAL) Get player controls hidden state. NOTE: if not supported the function must be undefined. Annoto will use other methods to detect controls state. Below it is defined only for purposes of API documentation.

*__returns__*: 

#### Type declaration
▸(): `boolean`

**Returns:** `boolean`

___
<a id="currenttime"></a>

##  currentTime

**● currentTime**: *`function`*

*__description__*: Get time of current playback position.

*__returns__*: *   in seconds. Preferred Floating point precision.

#### Type declaration
▸():  `number` &#124; `Promise`<`number`>

**Returns:**  `number` &#124; `Promise`<`number`>

___
<a id="duration"></a>

##  duration

**● duration**: *`function`*

*__description__*: Get the total media track duration in seconds 0 or NaN or 'undefined' values may be returned until media is ready. Note: For live video for best experience return the latest known duration of the stream. (for DVR enabled live stream, it can defer from currentTime)

*__returns__*: *   in seconds

#### Type declaration
▸():  `number` &#124; `Promise`<`number`>

**Returns:**  `number` &#124; `Promise`<`number`>

___
<a id="embeddableelement"></a>

## `<Optional>` embeddableElement

**● embeddableElement**: *`function`*

*__description__*: (OPTIONAL) Get player Element of type DIV for embedding annoto application for full screen state. NOTE: if not supported the function must be undefined.

*__returns__*: 

#### Type declaration
▸(): `Element`

**Returns:** `Element`

___
<a id="fixfullscreen"></a>

## `<Optional>` fixFullScreen

**● fixFullScreen**: *`function`*

*__description__*: (OPTIONAL) By default Annoto will try applying a fix To enable Annoto to work when player enters Full screen. The fix is moving annoto-app container as a child of the player element or embeddableElement() annoto-app will be moved only if it the player element allows it (is DIV). annoto-app will be moved when player enters full screen, and moved back to the original parent of annoto-app obtained at Annoto.boot() call. NOTE: In rare case when this must be disabled, return false from the function. NOTE: if not required/supported the function must be undefined.

*__returns__*: 

#### Type declaration
▸(): `boolean`

**Returns:** `boolean`

___
<a id="fullscreen"></a>

## `<Optional>` fullScreen

**● fullScreen**: *`function`*

*__description__*: (OPTIONAL) Get player full screen state. NOTE: if not supported the function must be undefined. Annoto will use other methods to detect full screen. Below it is defined only for purposes of API documentation.

*__returns__*: 

#### Type declaration
▸(): `boolean`

**Returns:** `boolean`

___
<a id="height"></a>

## `<Optional>` height

**● height**: *`function`*

*__description__*: (OPTIONAL) Get player height in pixels. NOTE: if not supported the function must be undefined. Annoto will use other methods to detect height of the player. Below it is defined only for purposes of API documentation.

*__returns__*: if string, may contain 'px'

#### Type declaration
▸():  `number` &#124; `string`

**Returns:**  `number` &#124; `string`

___
<a id="init"></a>

##  init

**● init**: *`function`*

*__description__*: This method is called by Annoto as the first method. Use it to configure the player interface object. If the method returns false, Annoto will retry a number of times with fixed period of time between the retries. This is useful if your player needs to load some resources, or wait for some condition. Notice: For Advanced use cases, the method can return a Promise. If a Promise is returned, No retries shall be performed. Annoto will wait for Promise resolve/reject.

*__param__*: html DOM element of the player (as configured by Annoto API)

*__param__*: player.params of API configuration

*__returns__*: 

#### Type declaration
▸(element: *`Element`*, params: *`any`*):  `boolean` &#124; `Promise`<`boolean`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| element | `Element` |
| params | `any` |

**Returns:**  `boolean` &#124; `Promise`<`boolean`>

___
<a id="islive"></a>

## `<Optional>` isLive

**● isLive**: *`function`*

*__description__*: (OPTIONAL) Return if the media is a live stream or a VOD. NOTE: if the method is not implemented VOD is assumed.

*__returns__*: 

#### Type declaration
▸():  `boolean` &#124; `Promise`<`boolean`>

**Returns:**  `boolean` &#124; `Promise`<`boolean`>

___
<a id="mediametadata"></a>

## `<Optional>` mediaMetadata

**● mediaMetadata**: *`function`*

*__description__*: (OPTIONAL) Get Details for the media.

*__returns__*: 

#### Type declaration
▸():  [MediaDetails](annotoconfig.mediadetails.md) &#124; `Promise`<[MediaDetails](annotoconfig.mediadetails.md)>

**Returns:**  [MediaDetails](annotoconfig.mediadetails.md) &#124; `Promise`<[MediaDetails](annotoconfig.mediadetails.md)>

___
<a id="mediasrc"></a>

##  mediaSrc

**● mediaSrc**: *`function`*

*__description__*: Get full URL of the currently played media source.

*__returns__*: 

#### Type declaration
▸():  `string` &#124; `Promise`<`string`>

**Returns:**  `string` &#124; `Promise`<`string`>

___
<a id="oncontrolsenter"></a>

## `<Optional>` onControlsEnter

**● onControlsEnter**: *`function`*

*__description__*: (OPTIONAL) cb should be called when mouse enters player controls. If implemented the onControlsLeave() method must be implemented as well. NOTE: In most cases this event is not required. NOTE: if not supported the function must be undefined. If defined the main usage of this event is to hide Annoto Timeline when user hovers mouse over the players controls, for example for players where Annoto Timeline interfers with some hover functionality of the player. The function is required only for Iframe players for other players Annoto can detect the event by itself.

*__param__*: 

#### Type declaration
▸(cb: *[PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** `void`

___
<a id="oncontrolshide"></a>

## `<Optional>` onControlsHide

**● onControlsHide**: *`function`*

*__description__*: (OPTIONAL) cb should be called when player controls are hidden. If implemented the onControlsShow() method must be implemented as well. If implemented those events will be used instead of mouse tracking and controlsDescriptor.mouse parameters. NOTE: if not supported the function must be undefined. Annoto will use other methods to detect controls state.

*__param__*: 

#### Type declaration
▸(cb: *[PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** `void`

___
<a id="oncontrolsleave"></a>

## `<Optional>` onControlsLeave

**● onControlsLeave**: *`function`*

*__description__*: (OPTIONAL) cb should be called when mouse leaves player controls. If implemented the onControlsEnter() method must be implemented as well. NOTE: In most cases this event is not required. NOTE: if not supported the function must be undefined. If defined the main usage of this event is to hide Annoto Timeline when user hovers mouse over the players controls, for example for players where Annoto Timeline interfers with some hover functionality of the player. The function is required only for Iframe players for other players Annoto can detect the event by itself.

*__param__*: 

#### Type declaration
▸(cb: *[PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** `void`

___
<a id="oncontrolsshow"></a>

## `<Optional>` onControlsShow

**● onControlsShow**: *`function`*

*__description__*: (OPTIONAL) cb should be called when player controls are shown. If implemented the onControlsHide() method must be implemented as well. If implemented those events will be used instead of mouse tracking and controlsDescriptor.mouse parameters. NOTE: if not supported the function must be undefined. Annoto will use other methods to detect controls state.

*__param__*: 

#### Type declaration
▸(cb: *[PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** `void`

___
<a id="onerror"></a>

## `<Optional>` onError

**● onError**: *`function`*

*__description__*: (OPTIONAL) cb should be called when an error occurred during the loading of the media.

*__param__*: Error) => void}

#### Type declaration
▸(cb: *`function`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | `function` |

**Returns:** `void`

___
<a id="onfullscreen"></a>

## `<Optional>` onFullScreen

**● onFullScreen**: *`function`*

*__description__*: (OPTIONAL) cb should be called when full screen state of the player changes. NOTE: if not supported the function must be undefined. Annoto will use other methods to detect full screen.

*__param__*: boolean) => void} the callback may pass non mandatory new full screen state as boolean.

#### Type declaration
▸(cb: *`function`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | `function` |

**Returns:** `void`

___
<a id="onmediachange"></a>

##  onMediaChange

**● onMediaChange**: *`function`*

*__description__*: cb should be called when the media source changes.

*__param__*: 

#### Type declaration
▸(cb: *[PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** `void`

___
<a id="onpause"></a>

##  onPause

**● onPause**: *`function`*

*__description__*: cb should be called when the media is paused.

*__param__*: 

#### Type declaration
▸(cb: *[PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** `void`

___
<a id="onplay"></a>

##  onPlay

**● onPlay**: *`function`*

*__description__*: cb should be called when the media is played.

*__param__*: 

#### Type declaration
▸(cb: *[PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** `void`

___
<a id="onready"></a>

##  onReady

**● onReady**: *`function`*

*__description__*: cb should be called when the player is setup and the media metadata is loaded. This method must be called as the first event. If your player does not support this event, simulate it by calling the cb manually.

*__param__*: 

#### Type declaration
▸(cb: *[PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** `void`

___
<a id="onremove"></a>

## `<Optional>` onRemove

**● onRemove**: *`function`*

*__description__*: (OPTIONAL) cb should be called when the media element/player is taken off of a page. Useful for dynamic websites.

*__param__*: 

#### Type declaration
▸(cb: *[PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** `void`

___
<a id="onseek"></a>

##  onSeek

**● onSeek**: *`function`*

*__description__*: cb should be called when the media is seeked (playback position changes after seeking).

*__param__*: 

#### Type declaration
▸(cb: *[PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** `void`

___
<a id="onsizechange"></a>

## `<Optional>` onSizeChange

**● onSizeChange**: *`function`*

*__description__*: (OPTIONAL) cb should be called when player size changes. NOTE: if not supported the function must be undefined. Annoto will use other methods to detect size change.

*__param__*: 

#### Type declaration
▸(cb: *[PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** `void`

___
<a id="ontimeupdate"></a>

##  onTimeUpdate

**● onTimeUpdate**: *`function`*

*__description__*: cb should be called when the media playback current time is updated. Or when the media duration is changed. can be frequent. 200 msec is a good choice for period.

*__param__*: 

#### Type declaration
▸(cb: *[PlayerEventCallback](../modules/playeradaptor.md#playereventcallback)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | [PlayerEventCallback](../modules/playeradaptor.md#playereventcallback) |

**Returns:** `void`

___
<a id="pause"></a>

##  pause

**● pause**: *`function`*

*__description__*: Pause the media

#### Type declaration
▸():  `void` &#124; `Promise`<`void`>

**Returns:**  `void` &#124; `Promise`<`void`>

___
<a id="paused"></a>

##  paused

**● paused**: *`function`*

*__description__*: Get player playback state (playing or paused)

*__returns__*: *   true if pause, false if playing

#### Type declaration
▸():  `boolean` &#124; `Promise`<`boolean`>

**Returns:**  `boolean` &#124; `Promise`<`boolean`>

___
<a id="play"></a>

##  play

**● play**: *`function`*

*__description__*: Start playing the media

#### Type declaration
▸():  `void` &#124; `Promise`<`void`>

**Returns:**  `void` &#124; `Promise`<`void`>

___
<a id="remove"></a>

## `<Optional>` remove

**● remove**: *`function`*

*__description__*: (OPTIONAL) called by Annoto to release resources when the widget is closing. NOTICE: Although optional this method is highly recommended if you use Annoto API to dynamically load and close the widget. The adaptor implementation should discard the events that were regsitered using the onReady, onPlay, etc. when remove() is called.

#### Type declaration
▸():  `void` &#124; `Promise`<`void`>

**Returns:**  `void` &#124; `Promise`<`void`>

___
<a id="setcurrenttime"></a>

##  setCurrentTime

**● setCurrentTime**: *`function`*

*__description__*: Set the media current time of track (skip/seek to time of the track)

*__param__*: in seconds

#### Type declaration
▸(time: *`number`*):  `void` &#124; `Promise`<`void`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| time | `number` |

**Returns:**  `void` &#124; `Promise`<`void`>

___
<a id="trackmarginleft"></a>

## `<Optional>` trackMarginLeft

**● trackMarginLeft**: *`function`*

*__description__*: (OPTIONAL) Get player player controls track left margin in pixels. If supported it will be used instead of controlsDescriptor values. NOTE: if not supported the function must be undefined. Annoto will use other methods to detect height of the player. Below it is defined only for purposes of API documentation.

*__returns__*: if string, may contain 'px'

#### Type declaration
▸():  `number` &#124; `string`

**Returns:**  `number` &#124; `string`

___
<a id="trackmarginright"></a>

## `<Optional>` trackMarginRight

**● trackMarginRight**: *`function`*

*__description__*: (OPTIONAL) Get player player controls track right margin in pixels. If supported it will be used instead of controlsDescriptor values. NOTE: if not supported the function must be undefined. Annoto will use other methods to detect height of the player. Below it is defined only for purposes of API documentation.

*__returns__*: if string, may contain 'px'

#### Type declaration
▸():  `number` &#124; `string`

**Returns:**  `number` &#124; `string`

___
<a id="updatecontrolsdescriptor"></a>

## `<Optional>` updateControlsDescriptor

**● updateControlsDescriptor**: *`function`*

*__description__*: (OPTIONAL) If defined will be called at view refreshes of the widget. Allows the player to perform optional adjustments to the controls descriptor. NOTE: may be called frequently, so no heavy operations should be performed.

*__param__*: 

*__param__*: 

#### Type declaration
▸(isPhone: *`boolean`*, isFullScreen: *`boolean`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| isPhone | `boolean` |
| isFullScreen | `boolean` |

**Returns:** `void`

___
<a id="videoratio"></a>

## `<Optional>` videoRatio

**● videoRatio**: *`function`*

*__description__*: (OPTIONAL) Get the ration of width / height of the video frame itself. Note: the ratio shold be of the video frame, not of the player element (it can be differnt). Note: In most cases this method is not required. It is required only if the controls size depends on the video frame size and not on the player element size, for example this is the case in Vimeo player.

#### Type declaration
▸():  `number` &#124; `null`

**Returns:**  `number` &#124; `null`

___
<a id="width"></a>

## `<Optional>` width

**● width**: *`function`*

*__description__*: (OPTIONAL) Get player width in pixels. NOTE: if not supported the function must be undefined. Annoto will use other methods to detect width of the player. Below it is defined only for purposes of API documentation.

*__returns__*: if string, may contain 'px'

#### Type declaration
▸():  `number` &#124; `string`

**Returns:**  `number` &#124; `string`

___

