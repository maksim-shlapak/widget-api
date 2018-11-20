

*__description__*: The parameters describe behavior of the player controls It is used as default controls parameters for correct timeline behavior in overlay and in full screen mode.

# Hierarchy

**ControlsDescriptor**

# Properties

<a id="firstshowdelay"></a>

## `<Optional>` firstShowDelay

**● firstShowDelay**: *`number`*

Delay in milliseconds for hide action (for example after mouse leaves the video frame)

___
<a id="fixvideoratiooffsets"></a>

## `<Optional>` fixVideoRatioOffsets

**● fixVideoRatioOffsets**: *`boolean`*

Similar to showDelay, but only for first show of controls. Not required for most players.

___
<a id="fullscreen"></a>

##  fullScreen

**● fullScreen**: *[ControlsDescriptorFullscreen](playeradaptor.controlsdescriptorfullscreen.md)*

The track is the progress timeline element of the controls not including the other controls like the play button.

___
<a id="height"></a>

##  height

**● height**: *`number`*

___
<a id="hidedelay"></a>

## `<Optional>` hideDelay

**● hideDelay**: *`number`*

Delay in milliseconds for any show controls action

___
<a id="hideonplay"></a>

## `<Optional>` hideOnPlay

**● hideOnPlay**: *`boolean`*

The controls are dynamically closing and opening based on user mouse movement. To fit the the timeline to the state of the controls, we track mouse movement.

___
<a id="mouse"></a>

##  mouse

**● mouse**: *[ControlsDescriptorMouse](playeradaptor.controlsdescriptormouse.md)*

Same parameters as above for full screen. Some players have different parameters of controls when they are in full screen.

___
<a id="scrubberoninoverlay"></a>

## `<Optional>` scrubberOnInOverlay

**● scrubberOnInOverlay**: *`boolean`*

The height in pixels of the controls

___
<a id="showdelay"></a>

## `<Optional>` showDelay

**● showDelay**: *`number`*

Set to true if controls are shown when the player loads

___
<a id="shownonload"></a>

## `<Optional>` shownOnLoad

**● shownOnLoad**: *`boolean`*

Set to true if play() action causes controls to hide

___
<a id="timeline"></a>

##  timeline

**● timeline**: *[ControlsDescriptorTimeline](playeradaptor.controlsdescriptortimeline.md)*

Timeline behaviour

___
<a id="track"></a>

##  track

**● track**: *[ControlsDescriptorTrack](playeradaptor.controlsdescriptortrack.md)*

if true the custom scrubber bar will be enabled in overlay. By default player controls scrubber is assumed to present in overlay and the custom scrubber is not shown.

___
<a id="transitions"></a>

##  transitions

**● transitions**: *[ControlsDescriptorTransitions](playeradaptor.controlsdescriptortransitions.md)*

The controls may have a transition effect for hidding and showing.

___
<a id="videoratiooffsets"></a>

## `<Optional>` videoRatioOffsets

**● videoRatioOffsets**: *[ControlsDescriptorVideoRatioOffsets](playeradaptor.controlsdescriptorvideoratiooffsets.md)*

___

