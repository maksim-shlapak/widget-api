

# Index

### Interfaces

* [Annoto](../interfaces/annoto.annoto-1.md)
* [AnnotoApi](../interfaces/annoto.annotoapi.md)
* [AnnotoMetadata](../interfaces/annoto.annotometadata.md)
* [AnnotoUxEvent](../interfaces/annoto.annotouxevent.md)
* [CommentsCounters](../interfaces/annoto.commentscounters.md)
* [ContentCounters](../interfaces/annoto.contentcounters.md)
* [ContentCountersBase](../interfaces/annoto.contentcountersbase.md)
* [DeviceDetectorApi](../interfaces/annoto.devicedetectorapi.md)
* [OriginProvider](../interfaces/annoto.originprovider.md)
* [ThreadMetadata](../interfaces/annoto.threadmetadata.md)
* [VisibleCountersData](../interfaces/annoto.visiblecountersdata.md)
* [VisibleEmotionData](../interfaces/annoto.visibleemotiondata.md)

### Type aliases

* [AnnotoEventType](annoto.md#annotoeventtype)
* [AnnotoMetadataCallback](annoto.md#annotometadatacallback)
* [AnnotoReadyCallback](annoto.md#annotoreadycallback)
* [AnnotoUxEventCallback](annoto.md#annotouxeventcallback)

---

# Type aliases

<a id="annotoeventtype"></a>

##  AnnotoEventType

**Ƭ AnnotoEventType**: * "ready" &#124; "metadata" &#124; "ux"
*

___
<a id="annotometadatacallback"></a>

##  AnnotoMetadataCallback

**Ƭ AnnotoMetadataCallback**: *`function`*

#### Type declaration
▸(metadata: *[AnnotoMetadata](../interfaces/annoto.annotometadata.md)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| metadata | [AnnotoMetadata](../interfaces/annoto.annotometadata.md) |

**Returns:** `void`

___
<a id="annotoreadycallback"></a>

##  AnnotoReadyCallback

**Ƭ AnnotoReadyCallback**: *`function`*

#### Type declaration
▸(api: *[AnnotoApi](../interfaces/annoto.annotoapi.md)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | [AnnotoApi](../interfaces/annoto.annotoapi.md) |

**Returns:** `void`

___
<a id="annotouxeventcallback"></a>

##  AnnotoUxEventCallback

**Ƭ AnnotoUxEventCallback**: *`function`*

#### Type declaration
▸(uxEvent: *[AnnotoUxEvent](../interfaces/annoto.annotouxevent.md)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| uxEvent | [AnnotoUxEvent](../interfaces/annoto.annotouxevent.md) |

**Returns:** `void`

___

