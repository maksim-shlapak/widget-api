/**
 * Specifies how to position the widget reletive to the player
 * or screen (if horizontal = 'screen_edge')
 */
export interface WidgetAlignConfig {
    /**
     * Vertical alignment for positioning the widget
     * @default 'center'
     */
    vertical?: 'top' | 'center' | 'bottom';
    /**
     * 'element_edge' - outside the player right next to it
     * 'inner' - as an overlay inside the player on it's edge
     * 'screen_edge' - fixed position on the screen edge instead of relative to the player 
     * @default 'element_edge'
     */
    horizontal?: 'element_edge' | 'inner' | 'screen_edge';
}