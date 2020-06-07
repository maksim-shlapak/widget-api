# Interface: ControlsDescriptor

**`description`** The parameters describe behavior of the player controls
It is used as default controls parameters for correct timeline behavior in overlay
and in full screen mode.

## Hierarchy

* **ControlsDescriptor**

## Index

### Properties

* [firstShowDelay](playeradaptor.controlsdescriptor.md#optional-firstshowdelay)
* [fixVideoRatioOffsets](playeradaptor.controlsdescriptor.md#optional-fixvideoratiooffsets)
* [fullScreen](playeradaptor.controlsdescriptor.md#fullscreen)
* [height](playeradaptor.controlsdescriptor.md#height)
* [hideDelay](playeradaptor.controlsdescriptor.md#optional-hidedelay)
* [hideOnPlay](playeradaptor.controlsdescriptor.md#optional-hideonplay)
* [mouse](playeradaptor.controlsdescriptor.md#mouse)
* [scrubberOnInOverlay](playeradaptor.controlsdescriptor.md#optional-scrubberoninoverlay)
* [showDelay](playeradaptor.controlsdescriptor.md#optional-showdelay)
* [shownOnLoad](playeradaptor.controlsdescriptor.md#optional-shownonload)
* [timeline](playeradaptor.controlsdescriptor.md#timeline)
* [track](playeradaptor.controlsdescriptor.md#track)
* [transitions](playeradaptor.controlsdescriptor.md#transitions)
* [videoRatioOffsets](playeradaptor.controlsdescriptor.md#optional-videoratiooffsets)

## Properties

### `Optional` firstShowDelay

• **firstShowDelay**? : *number*

Delay in milliseconds for hide action (for example after mouse leaves the video frame)

___

### `Optional` fixVideoRatioOffsets

• **fixVideoRatioOffsets**? : *boolean*

Similar to showDelay, but only for first show of controls. Not required for most players.

___

###  fullScreen

• **fullScreen**: *[ControlsDescriptorFullscreen](playeradaptor.controlsdescriptorfullscreen.md)*

Same parameters as above for full screen. Some players have different parameters of controls
when they are in full screen.

___

###  height

• **height**: *number*

The height in pixels of the controls

___

### `Optional` hideDelay

• **hideDelay**? : *number*

Delay in milliseconds for any show controls action

___

### `Optional` hideOnPlay

• **hideOnPlay**? : *boolean*

The controls are dynamically closing and opening based on user mouse movement.
To fit the the timeline to the state of the controls, we track mouse movement.

___

###  mouse

• **mouse**: *[ControlsDescriptorMouse](playeradaptor.controlsdescriptormouse.md)*

Mouse tracking

___

### `Optional` scrubberOnInOverlay

• **scrubberOnInOverlay**? : *boolean*

if true the custom scrubber bar will be enabled in overlay.
By default player controls scrubber is assumed to present in overlay and the custom scrubber is not shown.

___

### `Optional` showDelay

• **showDelay**? : *number*

Set to true if controls are shown when the player loads

___

### `Optional` shownOnLoad

• **shownOnLoad**? : *boolean*

Set to true if play() action causes controls to hide

___

###  timeline

• **timeline**: *[ControlsDescriptorTimeline](playeradaptor.controlsdescriptortimeline.md)*

Timeline behaviour

___

###  track

• **track**: *[ControlsDescriptorTrack](playeradaptor.controlsdescriptortrack.md)*

The track is the progress timeline element of the controls
not including the other controls like the play button.

___

###  transitions

• **transitions**: *[ControlsDescriptorTransitions](playeradaptor.controlsdescriptortransitions.md)*

The controls may have a transition effect for hidding and showing.

___

### `Optional` videoRatioOffsets

• **videoRatioOffsets**? : *[ControlsDescriptorVideoRatioOffsets](playeradaptor.controlsdescriptorvideoratiooffsets.md)*

Video frame ratio offsets
