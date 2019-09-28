

# Hierarchy

**OriginProvider**

# Methods

<a id="getmediadeeplinkurl"></a>

## `<Optional>` getMediaDeepLinkUrl

▸ **getMediaDeepLinkUrl**(currentTime: *`number`*, mediaSrc: *`string`*): `string`

Url to the video page and specific playback time of currentTime. If provided will be used by annoto for email notifications, in the dashboard, etc.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| currentTime | `number` |  current playback time of the player in seconds |
| mediaSrc | `string` |  the media source of the player |

**Returns:** `string`

___
<a id="getpageurl"></a>

## `<Optional>` getPageUrl

▸ **getPageUrl**(): `string`

Url to the video page. Useful if Annoto is embedded inside iframe for example. default: window.location.href is used.

**Returns:** `string`

___

