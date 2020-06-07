# Interface: AnnotoConfig

## Hierarchy

* **AnnotoConfig**

## Index

### Properties

* [align](annotoconfig.annotoconfig-1.md#optional-align)
* [clientId](annotoconfig.annotoconfig-1.md#clientid)
* [demoMode](annotoconfig.annotoconfig-1.md#demomode)
* [features](annotoconfig.annotoconfig-1.md#optional-features)
* [fsZIndex](annotoconfig.annotoconfig-1.md#optional-fszindex)
* [helpUrl](annotoconfig.annotoconfig-1.md#optional-helpurl)
* [launchSource](annotoconfig.annotoconfig-1.md#optional-launchsource)
* [locale](annotoconfig.annotoconfig-1.md#optional-locale)
* [margins](annotoconfig.annotoconfig-1.md#optional-margins)
* [phonePosition](annotoconfig.annotoconfig-1.md#optional-phoneposition)
* [position](annotoconfig.annotoconfig-1.md#optional-position)
* [relativePositionElement](annotoconfig.annotoconfig-1.md#optional-relativepositionelement)
* [thread](annotoconfig.annotoconfig-1.md#optional-thread)
* [ux](annotoconfig.annotoconfig-1.md#optional-ux)
* [widgets](annotoconfig.annotoconfig-1.md#widgets)
* [width](annotoconfig.annotoconfig-1.md#optional-width)
* [zIndex](annotoconfig.annotoconfig-1.md#optional-zindex)

## Properties

### `Optional` align

• **align**? : *[WidgetAlignConfig](annotoconfig.widgetalignconfig.md)*

Specifies how to align the widget relative to the player

**`default`** { }

___

###  clientId

• **clientId**: *string*

___

###  demoMode

• **demoMode**: *boolean*

___

### `Optional` features

• **features**? : *[AnnotoFeatures](annotoconfig.annotofeatures.md)*

Enable/disable Features

___

### `Optional` fsZIndex

• **fsZIndex**? : *number*

same as zIndex, only for when the player is in fullscreen.
Default value: 100

___

### `Optional` helpUrl

• **helpUrl**? : *string*

___

### `Optional` launchSource

• **launchSource**? : *[LaunchSourceConfig](annotoconfig.launchsourceconfig.md)*

___

### `Optional` locale

• **locale**? : *string*

Language code for the widget.
Default: 'en'

___

### `Optional` margins

• **margins**? : *[WidgetMargins](annotoconfig.widgetmargins.md)*

___

### `Optional` phonePosition

• **phonePosition**? : *"right" | "left"*

Position the widget on the right or on the left side for mobile devices

**`default`** position same as position prop

___

### `Optional` position

• **position**? : *"right" | "left"*

Position the widget on the right or on the left side

**`default`** 'right'

___

### `Optional` relativePositionElement

• **relativePositionElement**? : *string | Element*

___

### `Optional` thread

• **thread**? : *[ThreadConfig](annotoconfig.threadconfig.md)*

___

### `Optional` ux

• **ux**? : *[UxConfig](annotoconfig.uxconfig.md)*

Configuration options that affect the user experience

___

###  widgets

• **widgets**: *[WidgetConfig](annotoconfig.widgetconfig.md)[]*

Widget configuration settings.
NOTE: only single widget is supported. the array is for future use.

___

### `Optional` width

• **width**? : *[WidgetSizeConfig](annotoconfig.widgetsizeconfig.md)*

DEPRECATED
use ux.maxWidth instead

___

### `Optional` zIndex

• **zIndex**? : *number*

The widget is position is absolute on page.
Set the zIndex to appropriate value to make it visible and not iterfer with other elements.
Default value: 100
