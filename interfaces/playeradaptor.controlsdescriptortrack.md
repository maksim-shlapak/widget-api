# Interface: ControlsDescriptorTrack

## Hierarchy

* **ControlsDescriptorTrack**

## Index

### Properties

* [marginLeft](playeradaptor.controlsdescriptortrack.md#marginleft)
* [marginRight](playeradaptor.controlsdescriptortrack.md#marginright)
* [maxWidth](playeradaptor.controlsdescriptortrack.md#optional-maxwidth)
* [widthPercentage](playeradaptor.controlsdescriptortrack.md#optional-widthpercentage)

## Properties

###  marginLeft

• **marginLeft**: *number*

The space in pixels between the left edge of the player and the start of the track

___

###  marginRight

• **marginRight**: *number*

The space in pixels between the right edge of the player and the end of the track

___

### `Optional` maxWidth

• **maxWidth**? : *number*

Maximum width of the track in pixels.
Not required for some of the players because the track width is 100%.
If set must be set to an integer representing pixels.

___

### `Optional` widthPercentage

• **widthPercentage**? : *number*

Width of the track in percentage of the whole screen width.
Some players don't use fixed width but use
percentage instead.
