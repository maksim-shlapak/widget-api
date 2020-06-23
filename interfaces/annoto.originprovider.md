# Interface: OriginProvider

## Hierarchy

* **OriginProvider**

## Index

### Methods

* [getMediaDeepLinkUrl](annoto.originprovider.md#optional-getmediadeeplinkurl)
* [getPageUrl](annoto.originprovider.md#optional-getpageurl)

## Methods

### `Optional` getMediaDeepLinkUrl

▸ **getMediaDeepLinkUrl**(`currentTime`: number, `mediaSrc`: string): *string*

Url to the video page and specific playback time of currentTime.
If provided will be used by annoto for email notifications, in the dashboard, etc.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`currentTime` | number | current playback time of the player in seconds |
`mediaSrc` | string | the media source of the player  |

**Returns:** *string*

___

### `Optional` getPageUrl

▸ **getPageUrl**(): *string*

Url to the video page.
Useful if Annoto is embedded inside iframe for example.
default: window.location.href is used.

**Returns:** *string*
