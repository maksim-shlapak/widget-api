/**
 * @module annoto
 */

export interface AnnotoUxEvent {
    name: 'widget:hide' | 'widget:show' | 'timeline:hide' | 'timeline:show' | 'timeline:focusin' | 'timeline:focusout';
    data?: any;
}