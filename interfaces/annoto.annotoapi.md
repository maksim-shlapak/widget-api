# Interface: AnnotoApi

## Hierarchy

* **AnnotoApi**

## Index

### Methods

* [auth](annoto.annotoapi.md#auth)
* [close](annoto.annotoapi.md#close)
* [getMetadata](annoto.annotoapi.md#getmetadata)
* [hide](annoto.annotoapi.md#hide)
* [load](annoto.annotoapi.md#load)
* [logout](annoto.annotoapi.md#logout)
* [registerDeviceDetector](annoto.annotoapi.md#registerdevicedetector)
* [registerOriginProvider](annoto.annotoapi.md#registeroriginprovider)
* [show](annoto.annotoapi.md#show)

## Methods

###  auth

▸ **auth**(`token`: string, `cb?`: function): *Promise‹void›*

**Parameters:**

▪ **token**: *string*

▪`Optional`  **cb**: *function*

▸ (): *void*

**Returns:** *Promise‹void›*

___

###  close

▸ **close**(`index?`: number, `cb?`: function): *Promise‹void›*

**Parameters:**

▪`Optional`  **index**: *number*

▪`Optional`  **cb**: *function*

▸ (): *void*

**Returns:** *Promise‹void›*

___

###  getMetadata

▸ **getMetadata**(): *[AnnotoMetadata](annoto.annotometadata.md)*

**Returns:** *[AnnotoMetadata](annoto.annotometadata.md)*

___

###  hide

▸ **hide**(`cb?`: function): *Promise‹void›*

**Parameters:**

▪`Optional`  **cb**: *function*

▸ (): *void*

**Returns:** *Promise‹void›*

___

###  load

▸ **load**(`config`: [AnnotoConfig](annotoconfig.annotoconfig-1.md), `cb?`: function): *Promise‹void›*

**Parameters:**

▪ **config**: *[AnnotoConfig](annotoconfig.annotoconfig-1.md)*

▪`Optional`  **cb**: *function*

▸ (): *void*

**Returns:** *Promise‹void›*

___

###  logout

▸ **logout**(`cb?`: function): *Promise‹void›*

**Parameters:**

▪`Optional`  **cb**: *function*

▸ (): *void*

**Returns:** *Promise‹void›*

___

###  registerDeviceDetector

▸ **registerDeviceDetector**(`detector`: [DeviceDetectorApi](annoto.devicedetectorapi.md), `cb?`: function): *Promise‹void›*

**Parameters:**

▪ **detector**: *[DeviceDetectorApi](annoto.devicedetectorapi.md)*

▪`Optional`  **cb**: *function*

▸ (): *void*

**Returns:** *Promise‹void›*

___

###  registerOriginProvider

▸ **registerOriginProvider**(`provider`: [OriginProvider](annoto.originprovider.md), `cb?`: function): *Promise‹void›*

**Parameters:**

▪ **provider**: *[OriginProvider](annoto.originprovider.md)*

▪`Optional`  **cb**: *function*

▸ (`err?`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | Error |

**Returns:** *Promise‹void›*

___

###  show

▸ **show**(`cb?`: function): *Promise‹void›*

**Parameters:**

▪`Optional`  **cb**: *function*

▸ (): *void*

**Returns:** *Promise‹void›*
