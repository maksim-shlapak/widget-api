

User experience configuration

# Hierarchy

**UxConfig**

# Properties

<a id="commentstoptobottom"></a>

## `<Optional>` commentsTopToBottom

**● commentsTopToBottom**: *`boolean`*

If set to true comments start will be at the top instead of bottom. false by default.

___
<a id="draggabledisabled"></a>

## `<Optional>` draggableDisabled

**● draggableDisabled**: *`boolean`*

if set to true widget position will be fixed and user won't be able to drag it. false by default.

___
<a id="pausetriggers"></a>

## `<Optional>` pauseTriggers

**● pauseTriggers**: *`object`*

Triggers that will automatically pause the player. All true by default.

> For live video, the player is never paused.

#### Type declaration

`Optional`  authTrigger: `boolean`

Pause when user is prompted to login/signup

`Optional`  cta: `boolean`

`Optional`  formOpen: `boolean`

Pause when user wants to comment, reply or add new note

`Optional`  timelineUgcTap: `boolean`

Will pause only if tapping on timeline segment that contains UGC, regular taps will not pause the video.

`Optional`  widgetOpenOnPhone: `boolean`

On mobile when widget is open it overlays the player. Pause when widget is open on mobile devices, so the video is not played in the background.

> when opening in interactive mode (kuku/mini widget that do not overlay all the video), the player will not be paused.

___
<a id="sidepanel"></a>

## `<Optional>` sidePanel

**● sidePanel**: *`boolean`*

if set to true, the widget will behave like a side panel if open.

1.  Will take full available height of the player.element / relativePositionElement.
2.  Will not be draggable. // false by default.

___

# Methods

<a id="logoutrequesthandle"></a>

## `<Optional>` logoutRequestHandle

▸ **logoutRequestHandle**():  `Promise`<`void`> &#124; `void`

For SSO enabled integrations only. If Provided, Will be called when user triggers Logout action and "Logout" option will appear in the drawer menu.

**Returns:**  `Promise`<`void`> &#124; `void`

If possible the promise should reslove/reject when the logout flow is finished.

___
<a id="ssoauthrequesthandle"></a>

## `<Optional>` ssoAuthRequestHandle

▸ **ssoAuthRequestHandle**():  `Promise`<`void`> &#124; `void`

For SSO enabled integrations only. If Provided, Will be called when user triggers Authentication. If not provided a message in the form is shown.

**Returns:**  `Promise`<`void`> &#124; `void`

If possible the promise should reslove/reject when the auth flow is finished.

___

