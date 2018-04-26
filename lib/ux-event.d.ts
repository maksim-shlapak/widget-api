export interface AnnotoUxEvent {
    name: 'widget:hide' | 'widget:show' | 'timeline:hide' | 'timeline:show';
    data?: any;
}