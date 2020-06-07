/**
 * @packageDocumentation
 * @module annoto
 */

export interface AnnotoUxEvent {
    name: 'widget:hide' | 'widget:show' | 'widget:minimise' | 'timeline:hide' | 'timeline:show' | 'timeline:focusin' | 'timeline:focusout';
    data?: any;
}