# Interface: ControlsDescriptorMouse

## Hierarchy

* **ControlsDescriptorMouse**

## Index

### Properties

* [enterTimeout](playeradaptor.controlsdescriptormouse.md#optional-entertimeout)
* [hideOnLeave](playeradaptor.controlsdescriptormouse.md#optional-hideonleave)
* [moveTimeout](playeradaptor.controlsdescriptormouse.md#optional-movetimeout)
* [showOnEnter](playeradaptor.controlsdescriptormouse.md#optional-showonenter)
* [trackMove](playeradaptor.controlsdescriptormouse.md#optional-trackmove)

## Properties

### `Optional` enterTimeout

• **enterTimeout**? : *number*

similar to moveTimeout but for mouse enter into video frame.
Useful when trackMove is false

___

### `Optional` hideOnLeave

• **hideOnLeave**? : *boolean*

Set to true if the controls are hiding when mouse leaves the video frame
(see hideDelay below).

___

### `Optional` moveTimeout

• **moveTimeout**? : *number*

Timeout in milliseconds after which the controls are hiding
when mouse inside the player is not moved.

___

### `Optional` showOnEnter

• **showOnEnter**? : *boolean*

Set to true if when mouse enters the video frame the controls gets open.

___

### `Optional` trackMove

• **trackMove**? : *boolean*

Set to true if movement of the mouse inside player opens the controls
