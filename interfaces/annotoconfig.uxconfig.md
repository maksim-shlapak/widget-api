# Interface: UxConfig

User experience configuration

## Hierarchy

* **UxConfig**

## Index

### Properties

* [commentsTopToBottom](annotoconfig.uxconfig.md#optional-commentstoptobottom)
* [draggableDisabled](annotoconfig.uxconfig.md#optional-draggabledisabled)
* [maxWidth](annotoconfig.uxconfig.md#optional-maxwidth)
* [openOnLoad](annotoconfig.uxconfig.md#optional-openonload)
* [pauseTriggers](annotoconfig.uxconfig.md#optional-pausetriggers)
* [sidePanelFullScreen](annotoconfig.uxconfig.md#optional-sidepanelfullscreen)
* [sidePanelFullScreenWidth](annotoconfig.uxconfig.md#optional-sidepanelfullscreenwidth)
* [sidePanelLayout](annotoconfig.uxconfig.md#optional-sidepanellayout)
* [sidePanelOverlay](annotoconfig.uxconfig.md#optional-sidepaneloverlay)
* [sidePanelOverlayWidth](annotoconfig.uxconfig.md#optional-sidepaneloverlaywidth)

### Methods

* [logoutRequestHandle](annotoconfig.uxconfig.md#optional-logoutrequesthandle)
* [ssoAuthRequestHandle](annotoconfig.uxconfig.md#optional-ssoauthrequesthandle)

## Properties

### `Optional` commentsTopToBottom

• **commentsTopToBottom**? : *boolean*

If set to true comments start will be at the top instead of bottom.

**`default`** false

___

### `Optional` draggableDisabled

• **draggableDisabled**? : *boolean*

if set to true widget position will be fixed and user won't be able to drag it.

**`default`** false

___

### `Optional` maxWidth

• **maxWidth**? : *number*

If povided will limit the responsive widget width.
Has effect when widget is positioned outside of the player.
Has no effect when widget is overlay inside the player or when player is in full screen.

**`default`** 460

___

### `Optional` openOnLoad

• **openOnLoad**? : *boolean*

Load widget in open state on first boot.
By default the widget is loaded closed, and after timeout a kuku is shown
promting user to comment.

**`default`** false

___

### `Optional` pauseTriggers

• **pauseTriggers**? : *object*

Triggers that will automatically pause the player.
All true by default.
> For live video, the player is never paused.

#### Type declaration:

* **authTrigger**? : *boolean*

* **cta**? : *boolean*

* **formOpen**? : *boolean*

* **timelineUgcTap**? : *boolean*

* **widgetOpenOnPhone**? : *boolean*

___

### `Optional` sidePanelFullScreen

• **sidePanelFullScreen**? : *boolean*

Enables side panel ux for player fullscreen. by default overlay is used in fullscreen.

**`default`** false

___

### `Optional` sidePanelFullScreenWidth

• **sidePanelFullScreenWidth**? : *number*

Width of the side panel in player fullscreen in pixels
has effect only if sidePanelFullScreen is enabled

**`default`** 370

___

### `Optional` sidePanelLayout

• **sidePanelLayout**? : *boolean*

if set to true, the widget will behave like a side panel:
1. Will take full available height of the player.element
2. Will not be draggable.
3. Will be position side by side with the player.
4. Will openOnLoad by default.
5. if there is not space to the side of the player will fallback to regualer inner overlay behaviour.
6. the width is responsive taking available space. width.max can be used to limit.

**`default`** false

___

### `Optional` sidePanelOverlay

• **sidePanelOverlay**? : *boolean*

If enabled the sidePanel will:
1. overlay the video player instead of positioning on the side of it.
2. will always be full height and never fallback to draggable.
3. will not openOnLoad by default

**`default`** false

___

### `Optional` sidePanelOverlayWidth

• **sidePanelOverlayWidth**? : *number*

Width of the overlay side panel
has effect only if sidePanelOverlay is enabled

**`default`** 370

## Methods

### `Optional` logoutRequestHandle

▸ **logoutRequestHandle**(): *Promise‹void› | void*

For SSO enabled integrations only.
If Provided, Will be called when user triggers Logout action and "Logout" option will appear in the drawer menu.

**Returns:** *Promise‹void› | void*

If possible the promise should reslove/reject when the logout flow is finished.

___

### `Optional` ssoAuthRequestHandle

▸ **ssoAuthRequestHandle**(): *Promise‹void› | void*

For SSO enabled integrations only.
If Provided, Will be called when user triggers Authentication.
If not provided a message in the form is shown.

**Returns:** *Promise‹void› | void*

If possible the promise should reslove/reject when the auth flow is finished.
