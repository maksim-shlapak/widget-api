

# Hierarchy

**UxConfig**

# Properties

<a id="commentstoptobottom"></a>

## `<Optional>` commentsTopToBottom

**● commentsTopToBottom**: *`boolean`*

___
<a id="draggabledisabled"></a>

## `<Optional>` draggableDisabled

**● draggableDisabled**: *`boolean`*

___
<a id="logoutrequesthandle"></a>

## `<Optional>` logoutRequestHandle

**● logoutRequestHandle**: *`function`*

*__description__*: If Provided, Will be called when user triggers Logout action.

*__returns__*: If possible the promise should reslove/reject when the logout flow is finished.

#### Type declaration
▸(): `Promise`<`void`>

**Returns:** `Promise`<`void`>

___
<a id="pausetriggers"></a>

## `<Optional>` pauseTriggers

**● pauseTriggers**: *`object`*

*__description__*: Triggers for automatically pause the player. All true by default.

#### Type declaration

`Optional`  authTrigger: `boolean`

`Optional`  cta: `boolean`

`Optional`  formOpen: `boolean`

`Optional`  timelineUgcTap: `boolean`

`Optional`  widgetOpenOnPhone: `boolean`

___
<a id="sidepanel"></a>

## `<Optional>` sidePanel

**● sidePanel**: *`boolean`*

*__description__*: if set to true, the widget will behave like a side panel if open.

1.  Will take full available height of the player.element / relativePositionElement.
2.  Will not be draggable. // false by default.

___
<a id="ssoauthrequesthandle"></a>

## `<Optional>` ssoAuthRequestHandle

**● ssoAuthRequestHandle**: *`function`*

*__description__*: For SSO enabled clientId only. if Provided, Will be called when user triggers Authentication. If not provided a message in the form is shown.

*__returns__*: If possible the promise should reslove/reject when the auth flow is finished.

#### Type declaration
▸(): `Promise`<`void`>

**Returns:** `Promise`<`void`>

___

